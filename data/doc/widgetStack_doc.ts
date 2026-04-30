import { DocModel } from "../model";

export const widgetStackDoc: DocModel = {
  slug: "widget-stack",
  title: "WidgetStack",

  description: "Container for arranging widget elements.",
  detail:
    "WidgetStack groups and layouts elements inside a ListWidget. "
    + "Children can be arranged vertically or horizontally and aligned within the stack.",

  properties: [
    { name: "backgroundColor", type: "property", access: "none", description: "Background color.", signature: "backgroundColor: Color" },
    { name: "backgroundGradient", type: "property", access: "none", description: "Background gradient.", signature: "backgroundGradient: string" },
    { name: "backgroundImage", type: "property", access: "none", description: "Background image.", signature: "backgroundImage: string" },
    { name: "borderColor", type: "property", access: "none", description: "Border color.", signature: "borderColor: Color" },
    { name: "borderWidth", type: "property", access: "none", description: "Border width.", signature: "borderWidth: number" },
    { name: "cornerRadius", type: "property", access: "none", description: "Corner radius.", signature: "cornerRadius: number" },
    { name: "size", type: "property", access: "none", description: "Fixed size.", signature: "size: Size" },
    { name: "spacing", type: "property", access: "none", description: "Spacing between children.", signature: "spacing: number" },
    { name: "url", type: "property", access: "none", description: "URL to open.", signature: "url: string" },
  ],

  methods: [
    {
      name: "addText",
      type: "method",
      access: "none",
      description: "Adds a text element.",
      signature: "addText(text: string): WidgetText",
      params: [{ name: "text", type: "string", description: "Text content." }],
      returns: { type: "WidgetText", description: "Created text element." },
    },
    {
      name: "addDate",
      type: "method",
      access: "none",
      description: "Adds a date element.",
      signature: "addDate(date: Date | string): WidgetDate",
      params: [{ name: "date", type: "Date | string", description: "Date value." }],
      returns: { type: "WidgetDate", description: "Created date element." },
    },
    {
      name: "addImage",
      type: "method",
      access: "none",
      description: "Adds an image element.",
      signature: "addImage(image: any): WidgetImage",
      params: [{ name: "image", type: "any", description: "Image data." }],
      returns: { type: "WidgetImage", description: "Created image element." },
    },
    {
      name: "addSpacer",
      type: "method",
      access: "none",
      description: "Adds a spacer.",
      signature: "addSpacer(length?: number): WidgetSpacer",
      params: [{ name: "length", type: "number", description: "Optional spacer size." }],
      returns: { type: "WidgetSpacer", description: "Created spacer." },
    },
    {
      name: "addStack",
      type: "method",
      access: "none",
      description: "Adds a nested stack.",
      signature: "addStack(): WidgetStack",
      returns: { type: "WidgetStack", description: "Created nested stack." },
    },

    {
      name: "layoutHorizontally",
      type: "method",
      access: "none",
      description: "Arranges children horizontally.",
      signature: "layoutHorizontally(): void",
      returns: { type: "void", description: "Sets layout to horizontal." },
    },
    {
      name: "layoutVertically",
      type: "method",
      access: "none",
      description: "Arranges children vertically.",
      signature: "layoutVertically(): void",
      returns: { type: "void", description: "Sets layout to vertical." },
    },

    {
      name: "topAlignContent",
      type: "method",
      access: "none",
      description: "Aligns content to top.",
      signature: "topAlignContent(): void",
      returns: { type: "void", description: "Sets alignment to top." },
    },
    {
      name: "centerAlignContent",
      type: "method",
      access: "none",
      description: "Aligns content to center.",
      signature: "centerAlignContent(): void",
      returns: { type: "void", description: "Sets alignment to center." },
    },
    {
      name: "bottomAlignContent",
      type: "method",
      access: "none",
      description: "Aligns content to bottom.",
      signature: "bottomAlignContent(): void",
      returns: { type: "void", description: "Sets alignment to bottom." },
    },
  ],
};