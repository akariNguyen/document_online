import { DocModel } from "../model";

export const scriptDoc: DocModel = {
  slug: "script",
  title: "Script",

  description: "Controls the current script execution.",

  detail:
    "Script provides utilities to manage the lifecycle of the running script. " +
    "Call complete() to indicate that the script has finished executing. " +
    "This is especially useful when running in widget or background contexts " +
    "where the system needs a clear completion signal.",

  properties: [],

  methods: [
    {
      name: "complete",
      type: "method",
      access: "static",
      description:
        "Marks the script as finished.",
      signature: "Script.complete(): void",
      params: [],
      returns: {
        type: "void",
        description:
          "Signals that the script has completed execution.",
      },
    },

    {
      name: "setShortcutOutput",
      type: "method",
      access: "static",
      description:
        "Sets the output value returned to a Shortcut.",
      signature:
        "Script.setShortcutOutput(value: any): void",
      params: [
        {
          name: "value",
          type: "any",
          description:
            "Value to return to the Shortcut.",
        },
      ],
      returns: {
        type: "void",
        description:
          "Does not return a value.",
      },
    },
  ],
};