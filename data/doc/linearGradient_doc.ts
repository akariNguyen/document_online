import { DocModel } from "../model";

export const linearGradientDoc: DocModel = {
  slug: "linear-gradient",
  title: "LinearGradient",

  description: "Represents a linear gradient.",
  detail:
    "Use LinearGradient to create gradient backgrounds for widgets. Assign it to listWidget.backgroundGradient. You can control colors, positions, and direction using points.",

  properties: [
    {
      name: "colors",
      type: "property",
      access: "none",
      description:
        "An array of colors used in the gradient. At least two colors are required.",
      signature: "colors: Color[]",
    },
    {
      name: "locations",
      type: "property",
      access: "none",
      description:
        "Defines the position of each color (0 → 1). Must match colors length.",
      signature: "locations: number[]",
    },
    {
      name: "startPoint",
      type: "property",
      access: "none",
      description:
        "The starting point of the gradient. (0,0) = top-left, (1,1) = bottom-right.",
      signature: "startPoint: Point",
    },
    {
      name: "endPoint",
      type: "property",
      access: "none",
      description: "The ending point of the gradient.",
      signature: "endPoint: Point",
    },
  ],

  methods: [
    {
      name: "LinearGradient",
      type: "constructor",
      access: "none",
      description: "Creates a new LinearGradient instance.",
      signature: "new LinearGradient()",
      params: [],
      returnType: "LinearGradient",
      returnDescription: "A new LinearGradient object.",
    },
  ],
};