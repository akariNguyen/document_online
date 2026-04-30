import { DocModel } from "../model";

export const widgetTextDoc: DocModel = {
  slug: "widget-text",
  title: "WidgetText",

  description: "Represents a text element in a widget.",
  detail:
    "WidgetText displays text inside a ListWidget or WidgetStack. "
    + "You do not create WidgetText manually. Instead, call addText() on a ListWidget or WidgetStack. "
    + "The text can be styled with font, color, opacity, shadow, line limit, scale factor, alignment, and URL.",

  properties: [
    {
      name: "text",
      type: "property",
      access: "none",
      description: "Text shown in the widget.",
      signature: "text: string",
    },
    {
      name: "font",
      type: "property",
      access: "none",
      description: "Font used for the text.",
      signature: "font: Font",
    },
    {
      name: "lineLimit",
      type: "property",
      access: "none",
      description: "Maximum number of lines.",
      signature: "lineLimit: number",
    },
    {
      name: "minimumScaleFactor",
      type: "property",
      access: "none",
      description: "Minimum scale factor for shrinking text.",
      signature: "minimumScaleFactor: number",
    },
    {
      name: "shadowColor",
      type: "property",
      access: "none",
      description: "Color of the text shadow.",
      signature: "shadowColor: Color",
    },
    {
      name: "shadowOffset",
      type: "property",
      access: "none",
      description: "Offset of the text shadow.",
      signature: "shadowOffset: Point",
    },
    {
      name: "shadowRadius",
      type: "property",
      access: "none",
      description: "Blur radius of the text shadow.",
      signature: "shadowRadius: number",
    },
    {
      name: "textColor",
      type: "property",
      access: "none",
      description: "Color of the text.",
      signature: "textColor: Color",
    },
    {
      name: "textOpacity",
      type: "property",
      access: "none",
      description: "Opacity of the text.",
      signature: "textOpacity: number",
    },
    {
      name: "url",
      type: "property",
      access: "none",
      description: "URL opened when the text is tapped.",
      signature: "url: string",
    },
  ],

  methods: [
    {
      name: "centerAlignText",
      type: "method",
      access: "none",
      description: "Center aligns the text.",
      signature: "centerAlignText(): void",
      returns: {
        type: "void",
        description: "Sets text alignment to center.",
      },
    },
    {
      name: "leftAlignText",
      type: "method",
      access: "none",
      description: "Left aligns the text.",
      signature: "leftAlignText(): void",
      returns: {
        type: "void",
        description: "Sets text alignment to left.",
      },
    },
    {
      name: "rightAlignText",
      type: "method",
      access: "none",
      description: "Right aligns the text.",
      signature: "rightAlignText(): void",
      returns: {
        type: "void",
        description: "Sets text alignment to right.",
      },
    },
  ],
};