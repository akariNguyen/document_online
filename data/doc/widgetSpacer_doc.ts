import { DocModel } from "../model";

export const widgetSpacerDoc: DocModel = {
  slug: "widget-spacer",
  title: "WidgetSpacer",

  description: "Represents a spacer element in a widget.",
  detail:
    "WidgetSpacer creates empty space between elements in a ListWidget. "
    + "If no length is provided, the spacer expands to fill available space. "
    + "If a length is set, it creates a fixed-size gap.",

  properties: [
    {
      name: "length",
      type: "property",
      access: "none",
      description: "Length of the spacer.",
      signature: "length?: number",
    },
  ],

  methods: [
    {
      name: "WidgetSpacer",
      type: "constructor",
      access: "none",
      description: "Creates a new spacer.",
      signature: "new WidgetSpacer(length?: number)",
      params: [
        {
          name: "length",
          type: "number",
          description: "Optional fixed length.",
        },
      ],
      returns: {
        type: "WidgetSpacer",
        description: "A new spacer element.",
      },
    },
  ],
};