import { DocModel } from "../model";

export const pointDoc: DocModel = {
  slug: "point",
  title: "Point",

  description: "Represents a 2D point.",
  detail:
    "Point represents a coordinate in a two-dimensional coordinate system. It contains an x and y value.",

  properties: [
    {
      name: "x",
      type: "property",
      access: "none",
      description: "X coordinate.",
      signature: "x: number",
    },
    {
      name: "y",
      type: "property",
      access: "none",
      description: "Y coordinate.",
      signature: "y: number",
    },
  ],

  methods: [
    {
      name: "Point",
      type: "constructor",
      access: "none",
      description: "Constructs a new point.",
      signature: "new Point(x: number, y: number)",
      params: [
        {
          name: "x",
          type: "number",
          description: "X coordinate.",
        },
        {
          name: "y",
          type: "number",
          description: "Y coordinate.",
        },
      ],
      returnType: "Point",
      returnDescription: "A new point object.",
    },
  ],
};