import { DocModel } from "../model";

export const dataDoc: DocModel = {
  slug: "data",
  title: "Data",

  description: "Raw data representation.",
  detail:
    "Raw data representation of strings, files and images. " +
    "Use Data to convert between bytes, strings, base64 values, files, and image data.",

  properties: [
    {
      name: "length",
      type: "property",
      access: "none",
      description: "Number of bytes in the data.",
      signature: "length: number",
    },
  ],

  methods: [
    {
      name: "fromBase64String",
      type: "method",
      access: "static",
      description: "Creates data from a base64 encoded string.",
      signature: "static fromBase64String(base64String: string): Data | null",
      params: [
        {
          name: "base64String",
          type: "string",
          description: "Base64 encoded string.",
        },
      ],
    },
    {
      name: "fromBytes",
      type: "method",
      access: "static",
      description: "Creates data from an array of bytes.",
      signature: "static fromBytes(bytes: number[]): Data",
      params: [
        {
          name: "bytes",
          type: "number[]",
          description: "Array of byte values.",
        },
      ],
    },
    {
      name: "fromFile",
      type: "method",
      access: "static",
      description: "Reads data from a file path.",
      signature: "static fromFile(filePath: string): Promise<Data | null>",
      params: [
        {
          name: "filePath",
          type: "string",
          description: "Path of the file to read.",
        },
      ],
    },
    {
      name: "fromJPEG",
      type: "method",
      access: "static",
      description: "Creates data from a JPEG image.",
      signature: "static fromJPEG(image: Image): Promise<Data>",
      params: [
        {
          name: "image",
          type: "Image",
          description: "Image to encode as JPEG.",
        },
      ],
    },
    {
      name: "fromPNG",
      type: "method",
      access: "static",
      description: "Creates data from a PNG image.",
      signature: "static fromPNG(image: Image): Promise<Data>",
      params: [
        {
          name: "image",
          type: "Image",
          description: "Image to encode as PNG.",
        },
      ],
    },
    {
      name: "fromString",
      type: "method",
      access: "static",
      description: "Creates data from a string.",
      signature: "static fromString(string: string): Data | null",
      params: [
        {
          name: "string",
          type: "string",
          description: "String to encode as UTF-8.",
        },
      ],
    },
    {
      name: "getBytes",
      type: "method",
      access: "none",
      description: "Gets bytes from data.",
      signature: "getBytes(): number[]",
      params: [],
    },
   
    {
      name: "toBase64String",
      type: "method",
      access: "none",
      description: "Creates a base64 encoded string.",
      signature: "toBase64String(): string",
      params: [],
    },
    {
      name: "toRawString",
      type: "method",
      access: "none",
      description: "Creates a string from the data.",
      signature: "toRawString(): string",
      params: [],
    },
   
  ],
};