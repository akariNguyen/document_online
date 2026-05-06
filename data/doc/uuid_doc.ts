import { DocModel } from "../model";

export const uuidDoc: DocModel = {
  slug: "uuid",
  title: "UUID",

  description: "Unique identifier.",
  detail:
    "A universally unique value that can be used to identify items.",

  properties: [],

  methods: [
    {
      name: "string",
      type: "method",
      access: "static",
      description: "Get string value.",
      signature: "UUID.string(): string",
      params: [],
      returns: {
        type: "string",
        description: "A new UUID string.",
      },
    },
  ],
};