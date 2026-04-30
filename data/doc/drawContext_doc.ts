import { DocModel } from "../model";

export const drawContextDoc: DocModel = {
  slug: "draw-context",
  title: "DrawContext",

  description: "Represents a drawing canvas.",
  detail:
    "DrawContext is used to create images by drawing shapes, text, and images. You can control colors, fonts, alignment, and paths, then render the result as an image using getImage().",

  properties: [
    {
      name: "opaque",
      type: "property",
      access: "none",
      description: "Whether the canvas is opaque.",
      signature: "opaque: boolean",
    },
    {
      name: "respectScreenScale",
      type: "property",
      access: "none",
      description: "Whether rendering uses device pixel ratio.",
      signature: "respectScreenScale: boolean",
    },
    {
      name: "size",
      type: "property",
      access: "none",
      description: "Canvas size.",
      signature: "size: Size",
    },
  ],

  methods: [
    // ===== CONSTRUCTOR =====
    {
      name: "DrawContext",
      type: "constructor",
      access: "none",
      description: "Creates a new drawing context.",
      signature: "new DrawContext()",
    },

    // ===== PATH =====
    {
      name: "addPath",
      type: "method",
      access: "none",
      description: "Adds a path for later fill or stroke operations.",
      signature: "addPath(path: Path): void",
      params: [
        { name: "path", type: "Path", description: "Path to draw." },
      ],
      returnType: "void",
    },

    // ===== IMAGE =====
    {
      name: "drawImageAtPoint",
      type: "method",
      access: "none",
      description: "Draws an image at a specific point.",
      signature: "drawImageAtPoint(image: Image, point: Point): void",
      params: [
        { name: "image", type: "Image", description: "Image to draw." },
        { name: "point", type: "Point", description: "Position." },
      ],
      returnType: "void",
    },
    {
      name: "drawImageInRect",
      type: "method",
      access: "none",
      description: "Draws an image inside a rectangle.",
      signature: "drawImageInRect(image: Image, rect: Rect): void",
      params: [
        { name: "image", type: "Image", description: "Image to draw." },
        { name: "rect", type: "Rect", description: "Target area." },
      ],
      returnType: "void",
    },

    // ===== TEXT =====
    {
      name: "drawText",
      type: "method",
      access: "none",
      description: "Draws text at a position.",
      signature: "drawText(text: string, point: Point): void",
      params: [
        { name: "text", type: "string", description: "Text content." },
        { name: "point", type: "Point", description: "Position." },
      ],
      returnType: "void",
    },
    {
      name: "drawTextInRect",
      type: "method",
      access: "none",
      description: "Draws text inside a rectangle.",
      signature: "drawTextInRect(text: string, rect: Rect): void",
      params: [
        { name: "text", type: "string", description: "Text content." },
        { name: "rect", type: "Rect", description: "Drawing area." },
      ],
      returnType: "void",
    },

    // ===== FILL =====
    {
      name: "fill",
      type: "method",
      access: "none",
      description: "Fills a rectangle (alias of fillRect).",
      signature: "fill(rect: Rect): void",
      params: [{ name: "rect", type: "Rect", description: "Target rectangle." }],
      returnType: "void",
    },
    {
      name: "fillRect",
      type: "method",
      access: "none",
      description: "Fills a rectangle.",
      signature: "fillRect(rect: Rect): void",
      params: [{ name: "rect", type: "Rect", description: "Target rectangle." }],
      returnType: "void",
    },
    {
      name: "fillEllipse",
      type: "method",
      access: "none",
      description: "Fills an ellipse.",
      signature: "fillEllipse(rect: Rect): void",
      params: [{ name: "rect", type: "Rect", description: "Target area." }],
      returnType: "void",
    },
    {
      name: "fillPath",
      type: "method",
      access: "none",
      description: "Fills the current path.",
      signature: "fillPath(): void",
      params: [],
      returnType: "void",
    },

    // ===== STROKE =====
    {
      name: "stroke",
      type: "method",
      access: "none",
      description: "Strokes a rectangle (alias of strokeRect).",
      signature: "stroke(rect: Rect): void",
      params: [{ name: "rect", type: "Rect", description: "Target rectangle." }],
      returnType: "void",
    },
    {
      name: "strokeRect",
      type: "method",
      access: "none",
      description: "Strokes a rectangle.",
      signature: "strokeRect(rect: Rect): void",
      params: [{ name: "rect", type: "Rect", description: "Target rectangle." }],
      returnType: "void",
    },
    {
      name: "strokeEllipse",
      type: "method",
      access: "none",
      description: "Strokes an ellipse.",
      signature: "strokeEllipse(rect: Rect): void",
      params: [{ name: "rect", type: "Rect", description: "Target area." }],
      returnType: "void",
    },
    {
      name: "strokePath",
      type: "method",
      access: "none",
      description: "Strokes the current path.",
      signature: "strokePath(): void",
      params: [],
      returnType: "void",
    },

    // ===== STYLE =====
    {
      name: "setFillColor",
      type: "method",
      access: "none",
      description: "Sets fill color.",
      signature: "setFillColor(color: Color): void",
      params: [{ name: "color", type: "Color", description: "Fill color." }],
      returnType: "void",
    },
    {
      name: "setStrokeColor",
      type: "method",
      access: "none",
      description: "Sets stroke color.",
      signature: "setStrokeColor(color: Color): void",
      params: [{ name: "color", type: "Color", description: "Stroke color." }],
      returnType: "void",
    },
    {
      name: "setTextColor",
      type: "method",
      access: "none",
      description: "Sets text color.",
      signature: "setTextColor(color: Color): void",
      params: [{ name: "color", type: "Color", description: "Text color." }],
      returnType: "void",
    },
    {
      name: "setLineWidth",
      type: "method",
      access: "none",
      description: "Sets line width.",
      signature: "setLineWidth(width: number): void",
      params: [{ name: "width", type: "number", description: "Line width." }],
      returnType: "void",
    },
    {
      name: "setFont",
      type: "method",
      access: "none",
      description: "Sets font for text.",
      signature: "setFont(font: Font): void",
      params: [{ name: "font", type: "Font", description: "Font." }],
      returnType: "void",
    },

    // ===== ALIGN =====
    {
      name: "setTextAlignedCenter",
      type: "method",
      access: "none",
      description: "Aligns text to center.",
      signature: "setTextAlignedCenter(): void",
      params: [],
      returnType: "void",
    },
    {
      name: "setTextAlignedLeft",
      type: "method",
      access: "none",
      description: "Aligns text to left.",
      signature: "setTextAlignedLeft(): void",
      params: [],
      returnType: "void",
    },
    {
      name: "setTextAlignedRight",
      type: "method",
      access: "none",
      description: "Aligns text to right.",
      signature: "setTextAlignedRight(): void",
      params: [],
      returnType: "void",
    },

    // ===== OUTPUT =====
    {
      name: "getImage",
      type: "method",
      access: "none",
      description: "Renders the drawing into an image.",
      signature: "getImage(): Promise<Image>",
      params: [],
      returnType: "Promise<Image>",
      returnDescription: "Rendered image.",
    },
  ],
};