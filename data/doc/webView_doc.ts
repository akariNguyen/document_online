import { DocModel } from "../model";

export const webViewDoc: DocModel = {
  slug: "web-view",
  title: "WebView",

  description: "Displays web content and runs JavaScript.",
  detail:
    "WebView can load URLs, HTML content, local files, or requests. "+
    "It also supports executing JavaScript inside the page.",

  properties: [],

  methods: [
    {
      name: "WebView",
      type: "constructor",
      access: "none",
      description: "Creates a new web view.",
      signature: "new WebView()",
      returns: {
        type: "WebView",
        description: "A new WebView instance.",
      },
    },

    {
      name: "loadURL",
      type: "method",
      access: "none",
      description: "Loads a URL.",
      signature:
        "loadURL(url: string,): Promise<void>",
      params: [
        { name: "url", type: "string", description: "URL to load." },
      ],
      returns: { type: "Promise<void>", description: "Resolves when loading starts." },
    },

    {
      name: "loadHTML",
      type: "method",
      access: "none",
      description: "Loads raw HTML.",
      signature:
        "loadHTML(html: string, baseURL?: string): Promise<void>",
      params: [
        { name: "html", type: "string", description: "HTML content." },
        { name: "baseURL", type: "string", description: "Base URL." },
      ],
      returns: { type: "Promise<void>", description: "Resolves when HTML is set." },
    },

    {
      name: "loadFile",
      type: "method",
      access: "none",
      description: "Loads a local file.",
      signature:
        "loadFile(fileURL: string): Promise<void>",
      params: [
        { name: "fileURL", type: "string", description: "File path." },
      ],
      returns: { type: "Promise<void>", description: "Resolves when file is loaded." },
    },

    {
      name: "loadRequest",
      type: "method",
      access: "none",
      description: "Loads a request.",
      signature:
        "loadRequest(request: Request): Promise<void>",
      params: [
        { name: "request", type: "Request", description: "Request object." },
      ],
      returns: { type: "Promise<void>", description: "Resolves when request is processed." },
    },

    {
      name: "present",
      type: "method",
      access: "none",
      description: "Presents the web view.",
      signature: "present(fullscreen?: boolean): void",
      params: [
        { name: "fullscreen", type: "boolean", description: "Fullscreen mode." },
      ],
      returns: { type: "void", description: "Triggers UI presentation." },
    },

    {
      name: "getHTML",
      type: "method",
      access: "none",
      description: "Returns current HTML content.",
      signature: "getHTML(): Promise<string | null>",
      returns: {
        type: "Promise<string | null>",
        description: "HTML content or null.",
      },
    },

    {
      name: "waitForLoad",
      type: "method",
      access: "none",
      description: "Waits until content is loaded.",
      signature: "waitForLoad(): Promise<void>",
      returns: {
        type: "Promise<void>",
        description: "Resolves when loading finishes.",
      },
    },

  ],
};