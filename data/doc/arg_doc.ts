import { DocModel } from "../model";

export const argsDoc: DocModel = {
  slug: "args",
  title: "args",

  description: "Arguments passed to the script.",
  detail:
    "Arguments are passed to the script when the script is executed from a share sheet. " +
    "You can specify the types of arguments a script supports from the script settings.",

  properties: [
    {
      name: "fileURLs",
      type: "property",
      description: "File URLs supplied by a share sheet or a shortcut action.",
      signature: "args.fileURLs: string[]",
    },
    {
      name: "images",
      type: "property",
      description: "Images supplied by a share sheet or a shortcut action.",
      signature: "args.images: Image[]",
    },
    {
      name: "notification",
      type: "property",
      description: "Notification being handled by the script.",
      signature: "args.notification: Notification",
    },
    {
      name: "plainTexts",
      type: "property",
      description: "Plain texts supplied by a share sheet or a shortcut action.",
      signature: "args.plainTexts: string[]",
    },
    {
      name: "queryParameters",
      type: "property",
      description: "Query parameters from a URL scheme.",
      signature: "args.queryParameters: { [key: string]: string }",
    },
    {
      name: "shortcutParameter",
      type: "property",
      description: "Parameter passed to a Shortcut.",
      signature: "args.shortcutParameter: any",
    },
    {
      name: "urls",
      type: "property",
      description: "URLs supplied by a share sheet or a shortcut action.",
      signature: "args.urls: string[]",
    },
    {
      name: "widgetParameter",
      type: "property",
      description: "Parameter passed to a widget.",
      signature: "args.widgetParameter: any",
    },
  ],

  methods: [],
};