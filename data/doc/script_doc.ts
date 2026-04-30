import { DocModel } from "../model";

export const scriptDoc: DocModel = {
  slug: "script",
  title: "Script",

  description: "Controls the current script execution.",
  detail:
    "Script provides utilities to control the lifecycle of a running script. "+
    "Calling complete() signals that execution has finished, which is important "+
    "in widget or background environments.",

  properties: [],

  methods: [
    {
      name: "complete",
      type: "method",
      access: "none",
      description: "Marks the script as finished.",
      signature: "Script.complete(): void",
    },
  ],
};