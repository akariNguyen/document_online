import Link from "next/link";
import { docs } from "@/data/index_doc";
import { AccessType } from "@/data/model";

type Props = {
  searchParams?: Promise<{
    doc?: string;
    q?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  const q = (params?.q ?? "").trim().toLowerCase();

  function matchDoc(item: (typeof docs)[number]) {
    if (!q) return true;

    const searchable = [
      item.slug,
      item.title,
      item.description,
      item.detail,

      ...item.properties.flatMap((p) => [
        p.name,
        p.type,
        p.description,
        p.signature ?? "",
      ]),

      ...item.methods.flatMap((m) => [
        m.name,
        m.type,
        m.description,
        m.signature ?? "",
        m.returnType ?? "",
        m.returnDescription ?? "",
        m.returns?.type ?? "",
        m.returns?.description ?? "",
        ...(m.parameters ?? m.params ?? []).flatMap((p) => [
          p.name,
          p.type,
          p.description ?? "",
        ]),
      ]),
    ];

    return searchable.some((v) => (v ?? "").toLowerCase().includes(q));
  }

  const filteredDocs = docs.filter(matchDoc);

  const activeSlug = params?.doc ?? filteredDocs[0]?.slug ?? docs[0].slug;

  const doc =
    filteredDocs.find((item) => item.slug === activeSlug) ??
    docs.find((item) => item.slug === activeSlug) ??
    filteredDocs[0] ??
    docs[0];

  const rightNav = [
    ...doc.properties.map((item) => item.name),
    ...doc.methods.map((item) => item.name),
  ];

  const withSearch = (slug: string) =>
    q ? `/?doc=${slug}&q=${encodeURIComponent(q)}` : `/?doc=${slug}`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f7f8] text-neutral-900">
      <header className="sticky top-0 z-50 bg-[#111111] text-white shadow-lg">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-4 py-3 sm:px-6 lg:h-16 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-0">
          <div className="flex min-w-0 items-center gap-3">
            <div className="shrink-0 rounded-xl bg-white px-3 py-1 text-sm font-bold text-black">
              {"{}"}
            </div>

            <h1 className="truncate text-xl font-bold sm:text-2xl">
              Scriptable Docs
            </h1>
          </div>

          <form action="/" className="w-full lg:w-[320px]">
            <input
              name="q"
              defaultValue={params?.q ?? ""}
              placeholder="Search API, method..."
              className="w-full rounded-xl bg-white/10 px-4 py-2 text-white outline-none placeholder:text-white/50 focus:bg-white/15"
            />
          </form>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_260px]">
        <aside className="border-b bg-white px-4 py-4 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
          <p className="mb-3 text-xs font-bold tracking-widest text-neutral-400 lg:mb-4">
            API REFERENCE
          </p>

          <nav className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
            {filteredDocs.length === 0 && (
              <p className="shrink-0 px-4 py-2 text-sm text-neutral-400">
                No API found
              </p>
            )}

            {filteredDocs.map((item) => {
              const active = item.slug === doc.slug;

              return (
                <Link
                  key={item.slug}
                  href={withSearch(item.slug)}
                  className={
                    active
                      ? "block shrink-0 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white shadow-sm lg:shrink"
                      : "block shrink-0 rounded-xl px-4 py-2 text-neutral-700 hover:bg-neutral-100 lg:shrink"
                  }
                >
                  <div className="whitespace-nowrap lg:whitespace-normal">
                    {item.title}
                  </div>

                  {q && (
                    <div className="mt-1 hidden text-xs opacity-70 line-clamp-1 lg:block">
                      {item.methods
                        .filter((m) => m.name.toLowerCase().includes(q))
                        .map((m) => m.name)
                        .slice(0, 3)
                        .join(", ")}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
        </aside>

        <section className="min-w-0 px-4 py-6 sm:px-6 lg:px-14 lg:py-12">
          <div className="mb-8 rounded-2xl border bg-white p-5 shadow-sm sm:p-7 lg:mb-10 lg:rounded-3xl lg:p-10">
            <p className="mb-3 text-sm font-bold text-blue-600 lg:mb-4">
              DOCUMENTATION
            </p>

            <h2 className="mb-4 break-words text-4xl font-bold sm:text-5xl lg:mb-6 lg:text-6xl">
              {doc.title}
            </h2>

            <p className="mb-4 text-lg text-neutral-700 sm:text-xl lg:mb-6 lg:text-2xl">
              {doc.description}
            </p>

            <p className="max-w-3xl text-base leading-7 text-neutral-600 lg:text-lg lg:leading-8">
              {doc.detail}
            </p>
          </div>

          <DocGroup title="Properties">
            {doc.properties.map((item) => (
              <DocSection
                key={item.name}
                title={item.name}
                type={item.type}
                access={item.access}
                desc={item.description}
                code={item.signature ?? ""}
              />
            ))}
          </DocGroup>

          <DocGroup title="Methods">
            {doc.methods.map((item) => (
              <DocSection
                key={item.name}
                title={item.name}
                type={item.type}
                access={item.access}
                isStatic={item.isStatic}
                desc={item.description}
                code={item.signature ?? ""}
                params={item.parameters ?? item.params ?? []}
                returnType={item.returnType ?? item.returns?.type}
                returnDescription={
                  item.returnDescription ?? item.returns?.description
                }
              />
            ))}
          </DocGroup>
        </section>

        <aside className="hidden border-l bg-white px-6 py-8 lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-64px)] lg:overflow-y-auto">
          <p className="mb-4 text-xs font-bold tracking-widest text-neutral-400">
            ON THIS PAGE
          </p>

          <nav className="space-y-2">
            {rightNav.map((item) => (
              <a
                key={item}
                href={`#${toId(item)}`}
                className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </main>
  );
}

function DocGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 lg:mb-12">
      <h3 className="mb-5 text-3xl font-bold lg:mb-6">{title}</h3>
      <div className="space-y-5 lg:space-y-6">{children}</div>
    </section>
  );
}

function DocSection({
  title,
  type,
  access,
  isStatic,
  desc,
  code,
  params,
  returnType,
  returnDescription,
}: {
  title: string;
  type: string;
  access?: AccessType;
  isStatic?: boolean;
  desc: string;
  code: string;
  params?: {
    name: string;
    type: string;
    description?: string;
  }[];
  returnType?: string;
  returnDescription?: string;
}) {
  const symbol =
    isStatic === true || access === "static"
      ? "+"
      : type === "method"
        ? "-"
        : "";

  return (
    <section
      id={toId(title)}
      className="scroll-mt-28 rounded-2xl border bg-white p-5 shadow-sm sm:p-6 lg:p-7"
    >
      <div className="mb-4 flex min-w-0 flex-wrap items-center gap-3">
        <h4 className="flex min-w-0 items-center gap-2 break-words text-xl font-bold sm:text-2xl">
          {symbol && <span className="font-bold text-blue-600">{symbol}</span>}

          <span className="min-w-0 break-words">{title}</span>
        </h4>

        <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
          {type}
        </span>
      </div>

      <p className="mb-5 leading-7 text-neutral-700">{desc}</p>

      {code && (
        <pre className="mb-5 max-w-full overflow-x-auto rounded-xl bg-[#111111] px-4 py-4 text-sm text-white sm:px-5">
          <code className="font-mono whitespace-pre">{code}</code>
        </pre>
      )}

      {params && params.length > 0 && (
        <div className="mb-5">
          <h5 className="mb-2 font-bold">Parameters</h5>

          <div className="space-y-2">
            {params.map((param) => (
              <div
                key={param.name}
                className="rounded-xl border bg-neutral-50 px-4 py-3"
              >
                <div className="break-words font-mono text-sm">
                  <span className="font-bold">{param.name}</span>
                  <span className="text-neutral-500">: {param.type}</span>
                </div>

                {param.description && (
                  <p className="mt-1 text-sm text-neutral-600">
                    {param.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {returnType && (
        <div>
          <h5 className="mb-2 font-bold">Returns</h5>

          <div className="rounded-xl border bg-neutral-50 px-4 py-3">
            <div className="break-words font-mono text-sm">{returnType}</div>

            {returnDescription && (
              <p className="mt-1 text-sm text-neutral-600">
                {returnDescription}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function toId(value: string) {
  return value
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(":", "")
    .replaceAll("?", "")
    .replaceAll("(", "")
    .replaceAll(")", "");
}