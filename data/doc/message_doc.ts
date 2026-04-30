import { DocModel } from "../model";

export const messageDoc: DocModel = {
  slug: "message",
  title: "Message",

  description: "Composes an SMS message.",
  detail:
    "Use Message to compose SMS messages. Set the body and recipients, then optionally add attachments before sending.",

  properties: [
    {
      name: "body",
      type: "property",
      access: "none",
      description: "Body text of the message.",
      signature: "body: string",
    },
    {
      name: "recipients",
      type: "property",
      access: "none",
      description: "Array of phone numbers to send the message to.",
      signature: "recipients: string[]",
    },
  ],

  methods: [
    {
      name: "Message",
      type: "constructor",
      access: "none",
      description: "Constructs a new message.",
      signature: "new Message()",
      params: [],
      returnType: "Message",
      returnDescription: "A new message object.",
    },

    {
      name: "addFileAttachment",
      type: "method",
      access: "none",
      description: "Adds a file attachment.",
      signature: "addFileAttachment(path: string): void",
      params: [
        {
          name: "path",
          type: "string",
          description: "File path to attach.",
        },
      ],
      returnType: "void",
    },

    {
      name: "addImageAttachment",
      type: "method",
      access: "none",
      description: "Adds an image attachment.",
      signature: "addImageAttachment(image: Data): void",
      params: [
        {
          name: "image",
          type: "Data",
          description: "Raw image data.",
        },
      ],
      returnType: "void",
    },

    {
      name: "addDataAttachment",
      type: "method",
      access: "none",
      description: "Adds raw data attachment.",
      signature:
        "addDataAttachment(data: Data, uti: string, filename: string): void",
      params: [
        {
          name: "data",
          type: "Data",
          description: "Raw data to attach.",
        },
        {
          name: "uti",
          type: "string",
          description: "Uniform Type Identifier (e.g. public.png).",
        },
        {
          name: "filename",
          type: "string",
          description: "Attachment file name.",
        },
      ],
      returnType: "void",
    },
    {
    name: "send",
    type: "method",
    access: "none",
    description: "Sends or opens the message composer with the current message data.",
    signature: "send(): Promise<void>",
    params: [],
    returnType: "Promise<void>",
    },
  ],
};