import { DocModel } from "../model";

export const quickLookDoc: DocModel = {
  slug: "quick-look",
  title: "QuickLook",

  description: "Presents an item.",
  detail:
    "Use QuickLook to preview files, images, or text. The system automatically chooses the best presentation format for the item.",

  properties: [],

  methods: [
    {
      name: "present",
      type: "method",
      access: "static",
      description: "Presents an item using the system preview.",
      signature: "static present(item: any, fullscreen?: boolean): Promise<void>",
      params: [
        {
          name: "item",
          type: "any",
          description:
            "Item to preview. Can be Image, Data, string, or other supported types.",
        },
        {
          name: "fullscreen",
          type: "boolean",
          description: "Whether to present in fullscreen mode.",
        },
      ],
      returnType: "Promise<void>",
      returnDescription: "Resolves when preview is dismissed.",
    },
  ],
};