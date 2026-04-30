import { DocModel } from "../model";

export const imageDoc: DocModel = {
  slug: "image",
  title: "Image",

  description: "Manages image data.",
  detail:
    "Image objects contain decoded image data. APIs that take or return images use the Image type. You can create an Image from raw data or from a file path.",

  properties: [
    {
      name: "size",
      type: "property",
      access: "none",
      description: "Size of the image in pixels.",
      signature: "size: Size",
    },
  ],

  methods: [
    {
      name: "fromData",
      type: "method",
      access: "static",
      description: "Creates an image from raw data.",
      signature: "static fromData(data: Data): Promise<Image | null>",
      params: [
        {
          name: "data",
          type: "Data",
          description: "Raw image data.",
        },
      ],
      returnType: "Promise<Image | null>",
      returnDescription: "Decoded image, or null if the data is invalid.",
    },
    {
      name: "fromFile",
      type: "method",
      access: "static",
      description: "Creates an image from a file.",
      signature: "static fromFile(filePath: string): Promise<Image | null>",
      params: [
        {
          name: "filePath",
          type: "string",
          description: "Path to the image file.",
        },
      ],
      returnType: "Promise<Image | null>",
      returnDescription: "Decoded image, or null if the file cannot be read.",
    },
    {
      name: "toPNG",
      type: "method",
      access: "none",
      description: "Converts the image to PNG data.",
      signature: "toPNG(): Promise<Data>",
      params: [],
      returnType: "Promise<Data>",
      returnDescription: "PNG image data.",
    },
  ],
};