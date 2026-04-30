import { DocModel } from "../model";

export const alertDoc: DocModel = {
  slug: "alert",
  title: "Alert",

  name: "Alert",
  kind: "Type",

  description: "Presents an alert.",
  shortDescription: "Presents an alert.",

  detail:
    "Use Alert to show a modal dialog with actions and optional text fields.",
  longDescription:
    "Use Alert to show a modal dialog with actions and optional text fields.",

  properties: [
    {
      name: "title",
      type: "property",
      access: "none",
      description: "Alert title.",
      longDescription: "The title displayed at the top of the alert.",
      signature: "title: string",
    },
    {
      name: "message",
      type: "property",
      access: "none",
      description: "Alert message.",
      longDescription: "The message displayed below the title.",
      signature: "message: string",
    },
  ],

  methods: [
    {
      name: "New Alert",
      type: "constructor",
      access: "none",
      isStatic: false,
      description: "Create alert.",
      signature: "new Alert()",
    },

    {
      name: "addAction",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Add action.",
      signature: "addAction(title: string): void",
      params: [
        {
          name: "title",
          type: "string",
          description: "Action title.",
        },
      ],
      parameters: [
        {
          name: "title",
          type: "string",
          description: "Action title.",
        },
      ],
      returnType: "void",
    },

    {
      name: "addCancelAction",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Add cancel action.",
      signature: "addCancelAction(title: string): void",
      params: [
        {
          name: "title",
          type: "string",
          description: "Cancel action title.",
        },
      ],
      parameters: [
        {
          name: "title",
          type: "string",
          description: "Cancel action title.",
        },
      ],
      returnType: "void",
    },

    {
      name: "addDestructiveAction",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Add destructive action.",
      signature: "addDestructiveAction(title: string): void",
      params: [
        {
          name: "title",
          type: "string",
          description: "Destructive action title.",
        },
      ],
      parameters: [
        {
          name: "title",
          type: "string",
          description: "Destructive action title.",
        },
      ],
      returnType: "void",
    },

    {
      name: "addTextField",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Add text field.",
      signature: "addTextField(placeholder: string, text: string): TextField",
      params: [
        {
          name: "placeholder",
          type: "string",
          description: "Placeholder text.",
        },
        {
          name: "text",
          type: "string",
          description: "Default value.",
        },
      ],
      parameters: [
        {
          name: "placeholder",
          type: "string",
          description: "Placeholder text.",
        },
        {
          name: "text",
          type: "string",
          description: "Default value.",
        },
      ],
      returns: {
        type: "TextField",
        description: "Created text field.",
      },
      returnType: "TextField",
      returnDescription: "Created text field.",
    },

    {
      name: "addSecureTextField",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Add secure text field.",
      signature:
        "addSecureTextField(placeholder: string, text: string): TextField",
      params: [
        {
          name: "placeholder",
          type: "string",
          description: "Placeholder text.",
        },
        {
          name: "text",
          type: "string",
          description: "Default value.",
        },
      ],
      parameters: [
        {
          name: "placeholder",
          type: "string",
          description: "Placeholder text.",
        },
        {
          name: "text",
          type: "string",
          description: "Default value.",
        },
      ],
      returns: {
        type: "TextField",
        description: "Created secure text field.",
      },
      returnType: "TextField",
      returnDescription: "Created secure text field.",
    },

    {
      name: "textFieldValue",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Get text field value.",
      signature: "textFieldValue(index: number): string",
      params: [
        {
          name: "index",
          type: "number",
          description: "Text field index.",
        },
      ],
      parameters: [
        {
          name: "index",
          type: "number",
          description: "Text field index.",
        },
      ],
      returns: {
        type: "string",
        description: "Value of the text field.",
      },
      returnType: "string",
      returnDescription: "Value of the text field.",
    },

    {
      name: "present",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Show alert.",
      signature: "present(): Promise<void>",
      returns: {
        type: "Promise<void>",
        description: "Resolves after alert is closed.",
      },
      returnType: "Promise<void>",
      returnDescription: "Resolves after alert is closed.",
    },
  ],
};