import { DocModel } from "../model";

export const safariDoc: DocModel = {
  slug: "safari",
  title: "Safari",

  description: "Opens a website.",
  detail:
    "Safari allows opening a URL either in the system browser or inside the app. "+
    "You can choose whether the page is presented externally or embedded in the app.",

  properties: [],

  methods: [
    {
      name: "open",
      type: "method",
      access: "static",
      description: "Opens a URL in the system browser.",
      signature: "Safari.open(url: string): Safari",
      params: [
        {
          name: "url",
          type: "string",
          description: "The URL to open.",
        },
      ],
    },

    {
      name: "openInApp",
      type: "method",
      access: "static",
      description: "Opens a URL inside the app.",
      signature:
        "Safari.openInApp(url: string, fullscreen?: boolean): Safari",
      params: [
        {
          name: "url",
          type: "string",
          description: "The URL to open.",
        },
        {
          name: "fullscreen",
          type: "boolean",
          description: "Whether to use fullscreen mode.",
        },
      ],
    },
  ],
};