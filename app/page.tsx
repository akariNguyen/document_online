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

    return searchable.some((v) =>
  (v ?? "").toLowerCase().includes(q)
);
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
    <main className="min-h-screen bg-[#f7f7f8] text-neutral-900">
      <header className="sticky top-0 z-50 h-16 bg-[#111111] text-white flex items-center px-10 justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-white text-black px-3 py-1 text-sm font-bold">
            {"{}"}
          </div>
          <h1 className="text-2xl font-bold">Scriptable Docs</h1>
        </div>

        <form action="/" className="w-[320px]">
          <input
            name="q"
            defaultValue={params?.q ?? ""}
            placeholder="Search API, method..."
            className="w-full rounded-xl bg-white/10 px-4 py-2 text-white placeholder:text-white/50 outline-none focus:bg-white/15"
          />
        </form>
      </header>

      <div className="grid grid-cols-[260px_1fr_260px] max-w-[1500px] mx-auto">
        <aside className="sticky top-16 h-[calc(100vh-64px)] overflow-y-auto px-5 py-8 border-r bg-white">
          <p className="text-xs font-bold tracking-widest text-neutral-400 mb-4">
            API REFERENCE
          </p>

          <nav className="space-y-1">
            {filteredDocs.length === 0 && (
              <p className="text-sm text-neutral-400 px-4 py-2">
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
                      ? "block rounded-xl bg-blue-600 text-white px-4 py-2 font-medium shadow-sm"
                      : "block rounded-xl text-neutral-700 hover:bg-neutral-100 px-4 py-2"
                  }
                >
                  <div>{item.title}</div>

                  {q && (
                    <div className="mt-1 text-xs opacity-70 line-clamp-1">
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

        <section className="px-14 py-12">
          <div className="rounded-3xl bg-white border shadow-sm p-10 mb-10">
            <p className="text-sm font-bold text-blue-600 mb-4">
              DOCUMENTATION
            </p>

            <h2 className="text-6xl font-bold mb-6">{doc.title}</h2>

            <p className="text-2xl text-neutral-700 mb-6">
              {doc.description}
            </p>

            <p className="text-lg leading-8 text-neutral-600 max-w-3xl">
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

        <aside className="sticky top-16 h-[calc(100vh-64px)] overflow-y-auto px-6 py-8 border-l bg-white">
          <p className="text-xs font-bold tracking-widest text-neutral-400 mb-4">
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
    <section className="mb-12">
      <h3 className="text-3xl font-bold mb-6">{title}</h3>
      <div className="space-y-6">{children}</div>
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
      className="scroll-mt-24 rounded-2xl bg-white border shadow-sm p-7"
    >
      <div className="flex items-center gap-3 mb-4">
        <h4 className="text-2xl font-bold flex items-center gap-2">
          {symbol && (
            <span className="text-blue-600 font-bold">{symbol}</span>
          )}

          {title}
        </h4>

        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
          {type}
        </span>
      </div>

      <p className="text-neutral-700 mb-5 leading-7">{desc}</p>

      {code && (
        <pre className="rounded-xl bg-[#111111] text-white px-5 py-4 text-sm font-mono overflow-x-auto mb-5">
          <code>{code}</code>
        </pre>
      )}

      {params && params.length > 0 && (
        <div className="mb-5">
          <h5 className="font-bold mb-2">Parameters</h5>

          <div className="space-y-2">
            {params.map((param) => (
              <div
                key={param.name}
                className="rounded-xl bg-neutral-50 border px-4 py-3"
              >
                <div className="font-mono text-sm">
                  <span className="font-bold">{param.name}</span>
                  <span className="text-neutral-500">: {param.type}</span>
                </div>

                {param.description && (
                  <p className="text-sm text-neutral-600 mt-1">
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
          <h5 className="font-bold mb-2">Returns</h5>

          <div className="rounded-xl bg-neutral-50 border px-4 py-3">
            <div className="font-mono text-sm">{returnType}</div>

            {returnDescription && (
              <p className="text-sm text-neutral-600 mt-1">
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