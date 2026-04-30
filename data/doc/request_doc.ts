import { DocModel } from "../model";

export const requestDoc: DocModel = {
  slug: "request",
  title: "Request",

  description: "Performs HTTP requests.",
  detail:
    "Performs a URL request and returns the response in an appropriate format such as JSON, string, image, or raw data.",

  properties: [
    {
      name: "url",
      type: "property",
      description: "URL to send request to.",
      signature: "url: string",
    },
    {
      name: "method",
      type: "property",
      description: "HTTP method (GET, POST, PUT, DELETE...).",
      signature: "method: string",
    },
    {
      name: "headers",
      type: "property",
      description: "HTTP headers to send with the request.",
      signature: "headers: { [key: string]: string }",
    },
    {
      name: "body",
      type: "property",
      description: "Body to send with the request.",
      signature: "body: any",
    },
    {
      name: "timeoutInterval",
      type: "property",
      description: "Request timeout in seconds.",
      signature: "timeoutInterval: number",
    },
  ],

  methods: [
    // ===== CONSTRUCTOR =====
    {
      name: "Request",
      type: "constructor",
      description: "Constructs a new request.",
      signature: "new Request(url: string)",
      params: [
        {
          name: "url",
          type: "string",
          description: "Request URL.",
        },
      ],
    },

    // ===== LOAD =====
    {
      name: "load",
      type: "method",
      description: "Sends request and returns raw data.",
      signature: "load(): Promise<Data>",
    },
    {
      name: "loadJSON",
      type: "method",
      description: "Sends request and parses response as JSON.",
      signature: "loadJSON(): Promise<any>",
    },
    {
      name: "loadString",
      type: "method",
      description: "Sends request and parses response as a string.",
      signature: "loadString(): Promise<string>",
    },
    {
      name: "loadImage",
      type: "method",
      description: "Sends request and parses response as an image.",
      signature: "loadImage(): Promise<Image>",
    },
  ],
};