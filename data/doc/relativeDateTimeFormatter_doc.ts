import { DocModel } from "../model";

export const relativeDateTimeFormatterDoc: DocModel = {
  slug: "relative-date-time-formatter",
  title: "RelativeDateTimeFormatter",

  description: "Formats the relative time between two dates.",
  detail:
    "RelativeDateTimeFormatter generates a human-readable description of how far one date is from another. "+
    "It can express time using named phrases like \"yesterday\" or \"tomorrow\", "+
    "or using numeric values such as \"2 hours ago\" or \"in 3 days\".",

  properties: [
    {
      name: "locale",
      type: "property",
      access: "none",
      description: "Locale used for formatting.",
      signature: "locale: string",
    },
  ],

  methods: [
    {
      name: "RelativeDateTimeFormatter",
      type: "constructor",
      access: "none",
      description: "Creates a new formatter.",
      signature: "new RelativeDateTimeFormatter()",
    },

    {
      name: "string",
      type: "method",
      access: "none",
      description: "Formats the difference between two dates.",
      signature: "string(date: Date, referenceDate: Date): string",
      params: [
        {
          name: "date",
          type: "Date",
          description: "Target date.",
        },
        {
          name: "referenceDate",
          type: "Date",
          description: "Reference date.",
        },
      ],
    },

    {
      name: "useNamedDateTimeStyle",
      type: "method",
      access: "none",
      description: "Uses named relative values.",
      signature: "useNamedDateTimeStyle(): void",
    },

    {
      name: "useNumericDateTimeStyle",
      type: "method",
      access: "none",
      description: "Uses numeric relative values.",
      signature: "useNumericDateTimeStyle(): void",
    },
  ],
};