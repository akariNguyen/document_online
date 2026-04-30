import { DocModel } from "../model";

export const callbackUrlDoc: DocModel = {
  slug: "callback-url",
  title: "CallbackURL",

  name: "new CallbackURL",
  kind: "Type",

  description: "Constructs a callback URL request.",
  shortDescription: "Constructs a callback URL request.",

  detail:
    "Creates an object that opens x-callback-url requests and waits for a response from another application.",
  longDescription:
    "Creates an object that opens x-callback-url requests and waits for a response from another application.",

  properties: [
    {
      name: "baseURL",
      type: "property",
      access: "none",
      description: "Base URL of the request.",
      longDescription:
        "The base x-callback-url endpoint, for example: my-app://x-callback-url/action.",
      signature: "baseURL: string",
    },
  ],

  methods: [
    {
      name: "CallbackURL",
      type: "constructor",
      access: "none",
      isStatic: false,
      description: "Creates a new CallbackURL instance.",
      signature: "new CallbackURL(baseURL: string)",
      params: [
        {
          name: "baseURL",
          type: "string",
          description: "Base callback URL.",
        },
      ],
      parameters: [
        {
          name: "baseURL",
          type: "string",
          description: "Base callback URL.",
        },
      ],
    },

    {
      name: "addParameter",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Adds a query parameter to the request URL.",
      signature: "addParameter(name: string, value: string): void",
      params: [
        { name: "name", type: "string", description: "Parameter name." },
        { name: "value", type: "string", description: "Parameter value." },
      ],
      parameters: [
        { name: "name", type: "string", description: "Parameter name." },
        { name: "value", type: "string", description: "Parameter value." },
      ],
      returns: { type: "void" },
      returnType: "void",
    },

    {
      name: "open",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Opens the callback URL and waits for a response.",
      signature: "open(): Promise<void>",
      returns: {
        type: "Promise<void>",
        description: "Resolves after the target app responds.",
      },
      returnType: "Promise<void>",
      returnDescription: "Resolves after the target app responds.",
    },

    {
      name: "getResponse",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Gets the response returned by the callback.",
      signature: "getResponse(): object",
      returns: {
        type: "object",
        description: "Response data from the callback request.",
      },
      returnType: "object",
      returnDescription: "Response data from the callback request.",
    },
  ],
};