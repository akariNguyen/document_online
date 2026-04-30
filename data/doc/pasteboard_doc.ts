import { DocModel } from "../model";

export const pasteboardDoc: DocModel = {
  slug: "pasteboard",
  title: "Pasteboard",

  description: "Copy and paste strings or images.",
  detail:
    "Copy and paste strings and images to and from the pasteboard. Use Pasteboard.copy(string) or Pasteboard.copyString(string) to copy text. Use Pasteboard.paste() or Pasteboard.pasteString() to paste text. For images, use Pasteboard.copyImage(image) and Pasteboard.pasteImage().",

  properties: [],

  methods: [
    {
      name: "copy",
      type: "method",
      access: "static",
      description: "Copies a string to the pasteboard.",
      signature: "static copy(string: string): Promise<void>",
      params: [
        {
          name: "string",
          type: "string",
          description: "String to copy.",
        },
      ],
      returnType: "Promise<void>",
    },
    {
      name: "copyString",
      type: "method",
      access: "static",
      description: "Copies a string to the pasteboard.",
      signature: "static copyString(string: string): Promise<void>",
      params: [
        {
          name: "string",
          type: "string",
          description: "String to copy.",
        },
      ],
      returnType: "Promise<void>",
    },
    {
      name: "copyImage",
      type: "method",
      access: "static",
      description: "Copies image data to the pasteboard.",
      signature: "static copyImage(image: Data): Promise<void>",
      params: [
        {
          name: "image",
          type: "Data",
          description: "Image bytes to copy.",
        },
      ],
      returnType: "Promise<void>",
    },
    {
      name: "paste",
      type: "method",
      access: "static",
      description: "Pastes a string from the pasteboard.",
      signature: "static paste(): Promise<string>",
      params: [],
      returnType: "Promise<string>",
      returnDescription: "Clipboard text, or an empty string.",
    },
    {
      name: "pasteString",
      type: "method",
      access: "static",
      description: "Pastes a string from the pasteboard.",
      signature: "static pasteString(): Promise<string>",
      params: [],
      returnType: "Promise<string>",
      returnDescription: "Clipboard text, or an empty string.",
    },
    {
      name: "pasteImage",
      type: "method",
      access: "static",
      description: "Pastes an image from the pasteboard.",
      signature: "static pasteImage(): Promise<Data | null>",
      params: [],
      returnType: "Promise<Data | null>",
      returnDescription: "Image bytes, or null if the pasteboard has no image.",
    },
  ],
};