import { DocModel } from "../model";

export const consoleDoc: DocModel = {
  slug: "console",
  title: "Console",

  description: "Adds messages to the log.",
  detail:
    "The console can be used to log information when running your script. " +
    "The log may be useful when debugging your script, e.g. to examine values of variables.",

  properties: [],

  methods: [
    {
      name: "log",
      type: "method",
      access: "static",
      description: "Logs a message to the console.",
      signature: "static log(...message: any[]): void",
      params: [
        {
          name: "message",
          type: "any[]",
          description: "One or more values to log.",
        },
      ],
    },
    {
      name: "warn",
      type: "method",
      access: "static",
      description: "Logs a warning message to the console.",
      signature: "static warn(...message: any[]): void",
      params: [
        {
          name: "message",
          type: "any[]",
          description: "One or more values to log as a warning.",
        },
      ],
    },
    {
      name: "error",
      type: "method",
      access: "static",
      description: "Logs an error message to the console.",
      signature: "static error(...message: any[]): void",
      params: [
        {
          name: "message",
          type: "any[]",
          description: "One or more values to log as an error.",
        },
      ],
    },
  ],
};