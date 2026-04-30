import { DocModel } from "../model";

export const sizeDoc: DocModel = {
  slug: "size",
  title: "Size",

  description: "Represents a two-dimensional size.",
  detail:
    "Size stores width and height values. It is used for defining dimensions in layout, images, and drawing operations.",

  properties: [
    {
      name: "width",
      type: "property",
      access: "none",
      description: "Width value.",
      signature: "width: number",
    },
    {
      name: "height",
      type: "property",
      access: "none",
      description: "Height value.",
      signature: "height: number",
    },
  ],

  methods: [
    {
      name: "Size",
      type: "constructor",
      access: "none",
      description: "Creates a new size.",
      signature: "new Size(width: number, height: number)",
      params: [
        {
          name: "width",
          type: "number",
          description: "Width value.",
        },
        {
          name: "height",
          type: "number",
          description: "Height value.",
        },
      ],
    },
  ],
};