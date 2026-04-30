import { DocModel } from "../model";

export const rectDoc: DocModel = {
  slug: "rect",
  title: "Rect",

  description: "Represents a rectangle.",
  detail:
    "Rect represents a rectangle with an origin point and a size in a two-dimensional coordinate system.",

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
    {
      name: "width",
      type: "property",
      access: "none",
      description: "Rectangle width.",
      signature: "width: number",
    },
    {
      name: "height",
      type: "property",
      access: "none",
      description: "Rectangle height.",
      signature: "height: number",
    },
    {
      name: "minX",
      type: "property",
      access: "none",
      description: "Minimum X value.",
      signature: "minX: number",
    },
    {
      name: "minY",
      type: "property",
      access: "none",
      description: "Minimum Y value.",
      signature: "minY: number",
    },
    {
      name: "maxX",
      type: "property",
      access: "none",
      description: "Maximum X value.",
      signature: "maxX: number",
    },
    {
      name: "maxY",
      type: "property",
      access: "none",
      description: "Maximum Y value.",
      signature: "maxY: number",
    },
    {
      name: "origin",
      type: "property",
      access: "none",
      description: "Rectangle origin point.",
      signature: "origin: Point",
    },
    {
      name: "size",
      type: "property",
      access: "none",
      description: "Rectangle size.",
      signature: "size: Size",
    },
  ],

  methods: [
    {
      name: "Rect",
      type: "constructor",
      access: "none",
      description: "Constructs a rectangle.",
      signature: "new Rect(x: number, y: number, width: number, height: number)",
      params: [
        { name: "x", type: "number", description: "X coordinate." },
        { name: "y", type: "number", description: "Y coordinate." },
        { name: "width", type: "number", description: "Rectangle width." },
        { name: "height", type: "number", description: "Rectangle height." },
      ],
      returnType: "Rect",
      returnDescription: "A new rectangle object.",
    },
  ],
};