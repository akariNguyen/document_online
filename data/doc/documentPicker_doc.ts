import { DocModel } from "../model";

export const documentPickerDoc: DocModel = {
  slug: "document-picker",
  title: "DocumentPicker",

  description: "Presents a document picker.",
  detail:
    "Use DocumentPicker to open or export documents. When opening, the picker lets you select files or folders from the device. When exporting, the picker lets the user choose where to save or share a file.",

  properties: [],

  methods: [
    {
      name: "open",
      type: "method",
      access: "static",
      description: "Opens the document picker to select one or more files.",
      signature: "static open(types?: string[]): Promise<string[]>",
      params: [
        {
          name: "types",
          type: "string[]",
          description:
            "Optional file extensions, such as ['pdf', 'txt']. If empty, all file types are allowed.",
        },
      ],
      returnType: "Promise<string[]>",
      returnDescription:
        "List of selected file paths. Returns an empty list if no file is selected.",
    },
    {
      name: "openFile",
      type: "method",
      access: "static",
      description: "Opens the document picker to select a single file.",
      signature: "static openFile(): Promise<string | null>",
      params: [],
      returnType: "Promise<string | null>",
      returnDescription: "Selected file path, or null if no file is selected.",
    },
    {
      name: "openFolder",
      type: "method",
      access: "static",
      description: "Opens the directory picker to select a folder.",
      signature: "static openFolder(): Promise<string | null>",
      params: [],
      returnType: "Promise<string | null>",
      returnDescription:
        "Selected folder path, or null if no folder is selected.",
    },
    {
      name: "openImageFromGallery",
      type: "method",
      access: "static",
      description: "Opens the gallery picker to select images.",
      signature:
        "static openImageFromGallery(allowMultiple?: boolean): Promise<string[]>",
      params: [
        {
          name: "allowMultiple",
          type: "boolean",
          description: "Whether multiple images can be selected.",
        },
      ],
      returnType: "Promise<string[]>",
      returnDescription:
        "List of selected image paths. Returns an empty list if no image is selected.",
    },
    {
      name: "export",
      type: "method",
      access: "static",
      description: "Exports a file using the system save/share UI.",
      signature: "static export(path: string): Promise<boolean>",
      params: [
        {
          name: "path",
          type: "string",
          description: "Path of the file to export.",
        },
      ],
      returnType: "Promise<boolean>",
      returnDescription: "True if export succeeds, otherwise false.",
    },
    {
      name: "exportString",
      type: "method",
      access: "static",
      description: "Exports a string as a file.",
      signature:
        "static exportString(content: string, name: string): Promise<boolean>",
      params: [
        {
          name: "content",
          type: "string",
          description: "Text content to export.",
        },
        {
          name: "name",
          type: "string",
          description: "Output file name.",
        },
      ],
      returnType: "Promise<boolean>",
      returnDescription: "True if export succeeds, otherwise false.",
    },
    {
      name: "exportData",
      type: "method",
      access: "static",
      description: "Exports raw data as a file.",
      signature:
        "static exportData(data: Data, name: string): Promise<boolean>",
      params: [
        {
          name: "data",
          type: "Data",
          description: "Raw data to export.",
        },
        {
          name: "name",
          type: "string",
          description: "Output file name.",
        },
      ],
      returnType: "Promise<boolean>",
      returnDescription: "True if export succeeds, otherwise false.",
    },
    {
      name: "exportImage",
      type: "method",
      access: "static",
      description: "Exports image data as a file.",
      signature:
        "static exportImage(image: Image | Data, name: string): Promise<boolean>",
      params: [
        {
          name: "image",
          type: "Image | Data",
          description: "Image data to export.",
        },
        {
          name: "name",
          type: "string",
          description: "Output file name.",
        },
      ],
      returnType: "Promise<boolean>",
      returnDescription: "True if export succeeds, otherwise false.",
    },
  ],
};