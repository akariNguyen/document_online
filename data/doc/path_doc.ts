import { DocModel } from "../model";

export const pathDoc: DocModel = {
  slug: "path",
  title: "Path",

  description: "Describes a shape path.",
  detail:
    "Path is used to create shapes that can be drawn in a DrawContext. A path can contain lines, rectangles, ellipses, rounded rectangles, and curves.",

  properties: [],

  methods: [
    {
      name: "Path",
      type: "constructor",
      access: "none",
      description: "Creates a new path.",
      signature: "new Path()",
      params: [],
      returnType: "Path",
      returnDescription: "A new path instance.",
    },
    {
      name: "move",
      type: "method",
      access: "none",
      description: "Moves the current point to a position.",
      signature: "move(point: Point): void",
      params: [
        {
          name: "point",
          type: "Point",
          description: "Point to move to.",
        },
      ],
      returnType: "void",
    },
    {
      name: "addLine",
      type: "method",
      access: "none",
      description: "Adds a line from the current point to another point.",
      signature: "addLine(point: Point): void",
      params: [
        {
          name: "point",
          type: "Point",
          description: "Line end point.",
        },
      ],
      returnType: "void",
    },
    {
      name: "addLines",
      type: "method",
      access: "none",
      description: "Adds multiple connected lines.",
      signature: "addLines(points: Point[]): void",
      params: [
        {
          name: "points",
          type: "Point[]",
          description: "List of points.",
        },
      ],
      returnType: "void",
    },
    {
      name: "addRect",
      type: "method",
      access: "none",
      description: "Adds a rectangle.",
      signature: "addRect(rect: Rect): void",
      params: [
        {
          name: "rect",
          type: "Rect",
          description: "Rectangle to add.",
        },
      ],
      returnType: "void",
    },
    {
      name: "addRects",
      type: "method",
      access: "none",
      description: "Adds multiple rectangles.",
      signature: "addRects(rects: Rect[]): void",
      params: [
        {
          name: "rects",
          type: "Rect[]",
          description: "List of rectangles.",
        },
      ],
      returnType: "void",
    },
    {
      name: "addRoundedRect",
      type: "method",
      access: "none",
      description: "Adds a rounded rectangle.",
      signature:
        "addRoundedRect(rect: Rect, cornerWidth: number, cornerHeight: number): void",
      params: [
        {
          name: "rect",
          type: "Rect",
          description: "Rectangle area.",
        },
        {
          name: "cornerWidth",
          type: "number",
          description: "Horizontal corner radius.",
        },
        {
          name: "cornerHeight",
          type: "number",
          description: "Vertical corner radius.",
        },
      ],
      returnType: "void",
    },
    {
      name: "addEllipse",
      type: "method",
      access: "none",
      description: "Adds an ellipse inside a rectangle.",
      signature: "addEllipse(rect: Rect): void",
      params: [
        {
          name: "rect",
          type: "Rect",
          description: "Bounding rectangle.",
        },
      ],
      returnType: "void",
    },
    {
      name: "addCurve",
      type: "method",
      access: "none",
      description: "Adds a cubic Bézier curve.",
      signature:
        "addCurve(point: Point, control1: Point, control2: Point): void",
      params: [
        {
          name: "point",
          type: "Point",
          description: "Curve end point.",
        },
        {
          name: "control1",
          type: "Point",
          description: "First control point.",
        },
        {
          name: "control2",
          type: "Point",
          description: "Second control point.",
        },
      ],
      returnType: "void",
    },
    {
      name: "addQuadCurve",
      type: "method",
      access: "none",
      description: "Adds a quadratic Bézier curve.",
      signature: "addQuadCurve(point: Point, control: Point): void",
      params: [
        {
          name: "point",
          type: "Point",
          description: "Curve end point.",
        },
        {
          name: "control",
          type: "Point",
          description: "Control point.",
        },
      ],
      returnType: "void",
    },
    {
      name: "closeSubpath",
      type: "method",
      access: "none",
      description: "Closes the current subpath.",
      signature: "closeSubpath(): void",
      params: [],
      returnType: "void",
    },
  ],
};