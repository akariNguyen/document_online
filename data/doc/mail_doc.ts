import { DocModel } from "../model";

export const mailDoc: DocModel = {
  slug: "mail",
  title: "Mail",

  description: "Composes a mail.",
  detail:
    "Use Mail to compose emails. You can set recipients, subject, body, preferred sending address, and attach files, images, or raw data.",

  properties: [
    {
      name: "toRecipients",
      type: "property",
      access: "none",
      description: "Recipients of the mail.",
      signature: "toRecipients: string[]",
    },
    {
      name: "ccRecipients",
      type: "property",
      access: "none",
      description: "CC recipients of the mail.",
      signature: "ccRecipients: string[]",
    },
    {
      name: "bccRecipients",
      type: "property",
      access: "none",
      description: "BCC recipients of the mail.",
      signature: "bccRecipients: string[]",
    },
    {
      name: "subject",
      type: "property",
      access: "none",
      description: "Subject of the mail.",
      signature: "subject: string",
    },
    {
      name: "body",
      type: "property",
      access: "none",
      description: "Body of the mail.",
      signature: "body: string",
    },
    {
      name: "isBodyHTML",
      type: "property",
      access: "none",
      description: "Whether the body is HTML.",
      signature: "isBodyHTML: boolean",
    },
  ],

  methods: [
    {
      name: "Mail",
      type: "constructor",
      access: "none",
      description: "Constructs a new mail.",
      signature: "new Mail()",
      params: [],
      returnType: "Mail",
      returnDescription: "A new mail object.",
    },
    {
      name: "addFileAttachment",
      type: "method",
      access: "none",
      description: "Adds a file attachment to the mail.",
      signature: "addFileAttachment(filePath: string): void",
      params: [
        {
          name: "filePath",
          type: "string",
          description: "Path of the file to attach.",
        },
      ],
      returnType: "void",
    },
    {
      name: "addImageAttachment",
      type: "method",
      access: "none",
      description: "Adds an image attachment to the mail.",
      signature: "addImageAttachment(image: Image): Promise<void>",
      params: [
        {
          name: "image",
          type: "Image",
          description: "Image to attach.",
        },
      ],
      returnType: "Promise<void>",
    },
    {
      name: "addDataAttachment",
      type: "method",
      access: "none",
      description: "Adds raw data as an attachment.",
      signature:
        "addDataAttachment(data: Data, mimeType: string, filename: string): Promise<void>",
      params: [
        {
          name: "data",
          type: "Data",
          description: "Raw data to attach.",
        },
        {
          name: "mimeType",
          type: "string",
          description: "MIME type of the attachment.",
        },
        {
          name: "filename",
          type: "string",
          description: "Attachment file name.",
        },
      ],
      returnType: "Promise<void>",
    },
    {
    name: "send",
    type: "method",
    access: "none",
    description: "Sends or opens the mail composer with the current mail data.",
    signature: "send(): Promise<void>",
    params: [],
    returnType: "Promise<void>",
    },
  ],
};