import { DocModel } from "../model";

export const urlSchemeDoc: DocModel = {
  slug: "url-scheme",
  title: "URLScheme",

  description: "Generates and opens URL schemes.",
  detail:
    "URLScheme constructs URLs for interacting with the app, such as adding, opening, or running scripts. "+
    "It can also open URLs using the system browser or external apps.",

  properties: [],

  methods: [
    {
      name: "forAddingScript",
      type: "method",
      access: "static",
      description: "Returns the URL to add a new script.",
      signature: "URLScheme.forAddingScript(): string",
      returns: {
        type: "string",
        description: "URL in the form scriptable:///add",
      },
    },

    {
      name: "forOpeningScript",
      type: "method",
      access: "static",
      description: "Returns the URL to open a script.",
      signature: "URLScheme.forOpeningScript(name: string): string",
      params: [
        {
          name: "name",
          type: "string",
          description: "Script name.",
        },
      ],
      returns: {
        type: "string",
        description: "URL in the form scriptable:///open/<encoded name>",
      },
    },

    {
      name: "forRunningScript",
      type: "method",
      access: "static",
      description: "Returns the URL to run a script.",
      signature: "URLScheme.forRunningScript(name: string): string",
      params: [
        {
          name: "name",
          type: "string",
          description: "Script name.",
        },
      ],
      returns: {
        type: "string",
        description: "URL in the form scriptable:///run/<encoded name>",
      },
    },

    {
      name: "open",
      type: "method",
      access: "static",
      description: "Opens a URL using the system.",
      signature: "URLScheme.open(url: string): Promise<boolean>",
      params: [
        {
          name: "url",
          type: "string",
          description: "URL to open.",
        },
      ],
      returns: {
        type: "Promise<boolean>",
        description:
          "Resolves to true if the URL was opened successfully, otherwise false.",
      },
    },
  ],
};