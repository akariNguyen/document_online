import { DocModel } from "../model";

export const widgetImageDoc: DocModel = {
  slug: "widget-image",
  title: "WidgetImage",

  description: "Represents an image element in a widget.",
  detail:
    "WidgetImage displays an image inside a ListWidget. You do not create WidgetImage manually. "
    + "Instead, call addImage() on a ListWidget. The image can be styled with size, opacity, border, "
    + "corner radius, tint, alignment, and content mode.",

  properties: [
    {
      name: "image",
      type: "property",
      access: "none",
      description: "Image shown in the widget.",
      signature: "image: Image",
    },
    {
      name: "imageSize",
      type: "property",
      access: "none",
      description: "Size of the image in the widget.",
      signature: "imageSize: Size",
    },
    {
      name: "imageOpacity",
      type: "property",
      access: "none",
      description: "Opacity of the image.",
      signature: "imageOpacity: number",
    },
    {
      name: "resizable",
      type: "property",
      access: "none",
      description: "Whether the image can resize.",
      signature: "resizable: boolean",
    },
    {
      name: "tintColor",
      type: "property",
      access: "none",
      description: "Tint color applied to the image.",
      signature: "tintColor: Color",
    },
    {
      name: "borderColor",
      type: "property",
      access: "none",
      description: "Border color.",
      signature: "borderColor: Color",
    },
    {
      name: "borderWidth",
      type: "property",
      access: "none",
      description: "Border width.",
      signature: "borderWidth: number",
    },
    {
      name: "cornerRadius",
      type: "property",
      access: "none",
      description: "Corner radius of the image.",
      signature: "cornerRadius: number",
    },
    {
      name: "containerRelativeShape",
      type: "property",
      access: "none",
      description: "Whether the image shape follows its container.",
      signature: "containerRelativeShape: boolean",
    },
    {
      name: "url",
      type: "property",
      access: "none",
      description: "URL opened when the image is tapped.",
      signature: "url: string",
    },
  ],

  methods: [
    {
      name: "applyFillingContentMode",
      type: "method",
      access: "none",
      description: "Uses filling content mode.",
      signature: "applyFillingContentMode(): void",
      returns: {
        type: "void",
        description: "Sets the content mode to fill.",
      },
    },
    {
      name: "applyFittingContentMode",
      type: "method",
      access: "none",
      description: "Uses fitting content mode.",
      signature: "applyFittingContentMode(): void",
      returns: {
        type: "void",
        description: "Sets the content mode to fit.",
      },
    },
    {
      name: "centerAlignImage",
      type: "method",
      access: "none",
      description: "Center aligns the image.",
      signature: "centerAlignImage(): void",
      returns: {
        type: "void",
        description: "Sets image alignment to center.",
      },
    },
    {
      name: "leftAlignImage",
      type: "method",
      access: "none",
      description: "Left aligns the image.",
      signature: "leftAlignImage(): void",
      returns: {
        type: "void",
        description: "Sets image alignment to left.",
      },
    },
    {
      name: "rightAlignImage",
      type: "method",
      access: "none",
      description: "Right aligns the image.",
      signature: "rightAlignImage(): void",
      returns: {
        type: "void",
        description: "Sets image alignment to right.",
      },
    },
  ],
};