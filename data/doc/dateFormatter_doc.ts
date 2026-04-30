import { DocModel } from "../model";

export const dateFormatterDoc: DocModel = {
  slug: "date-formatter",
  title: "DateFormatter",

  description: "Formats dates into strings.",
  detail:
    "Use DateFormatter to convert Date objects into formatted strings " +
    "or parse strings into Date objects using a specified format or style.",

  properties: [
    {
      name: "dateFormat",
      type: "property",
      access: "none",
      description: "Date format used by the formatter.",
      signature: "dateFormat: string",
    },
    {
      name: "locale",
      type: "property",
      access: "none",
      description: "Locale used when formatting or parsing dates.",
      signature: "locale: string",
    },
  ],

  methods: [
    {
      name: "DateFormatter",
      type: "constructor",
      access: "none",
      description: "Constructs a new date formatter.",
      signature: "new DateFormatter()",
    },
    {
      name: "string",
      type: "method",
      access: "none",
      description: "Formats a Date object into a string.",
      signature: "string(date: Date): string",
      params: [
        {
          name: "date",
          type: "Date",
          description: "Date to format.",
        },
      ],
    },
    {
      name: "date",
      type: "method",
      access: "none",
      description: "Parses a string into a Date object.",
      signature: "date(string: string): Date | null",
      params: [
        {
          name: "string",
          type: "string",
          description: "String to parse.",
        },
      ],
    },
    {
      name: "useFullDateStyle",
      type: "method",
      access: "none",
      description: "Uses full date style.",
      signature: "useFullDateStyle(): void",
      params: [],
    },
    {
      name: "useLongDateStyle",
      type: "method",
      access: "none",
      description: "Uses long date style.",
      signature: "useLongDateStyle(): void",
      params: [],
    },
    {
      name: "useMediumDateStyle",
      type: "method",
      access: "none",
      description: "Uses medium date style.",
      signature: "useMediumDateStyle(): void",
      params: [],
    },
    {
      name: "useShortDateStyle",
      type: "method",
      access: "none",
      description: "Uses short date style.",
      signature: "useShortDateStyle(): void",
      params: [],
    },
    {
      name: "useNoDateStyle",
      type: "method",
      access: "none",
      description: "Disables date formatting.",
      signature: "useNoDateStyle(): void",
      params: [],
    },
    {
      name: "useFullTimeStyle",
      type: "method",
      access: "none",
      description: "Uses full time style.",
      signature: "useFullTimeStyle(): void",
      params: [],
    },
    {
      name: "useLongTimeStyle",
      type: "method",
      access: "none",
      description: "Uses long time style.",
      signature: "useLongTimeStyle(): void",
      params: [],
    },
    {
      name: "useMediumTimeStyle",
      type: "method",
      access: "none",
      description: "Uses medium time style.",
      signature: "useMediumTimeStyle(): void",
      params: [],
    },
    {
      name: "useShortTimeStyle",
      type: "method",
      access: "none",
      description: "Uses short time style.",
      signature: "useShortTimeStyle(): void",
      params: [],
    },
    {
      name: "useNoTimeStyle",
      type: "method",
      access: "none",
      description: "Disables time formatting.",
      signature: "useNoTimeStyle(): void",
      params: [],
    },
  ],
};