import { DocModel } from "../model";

export const shareSheetDoc: DocModel = {
  slug: "share-sheet",
  title: "ShareSheet",

  description: "Presents the system share sheet.",
  detail:
    "ShareSheet opens the platform share interface for a list of items. "+
    "Supported items include text, numbers, Data, Image, and byte arrays. "+
    "Items are normalized before being sent to the system share UI.",

  properties: [],

  methods: [
    {
      name: "present",
      type: "method",
      access: "static",
      description: "Presents the share sheet with the given items.",
      signature: "ShareSheet.present(activityItems: any[]): ShareSheet",
      params: [
        {
          name: "activityItems",
          type: "any[]",
          description: "Items to share.",
        },
      ],
      returns: {
        type: "ShareSheet",
        description:
          "A share sheet request object handled by the runtime.",
      },
    },
  ],
};