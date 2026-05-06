import { DocModel } from "../model";

export const speechDoc: DocModel = {
  slug: "speech",
  title: "Speech",

  description: "Speaks a text.",
  detail:
    "If used in a script triggered by a Siri Shortcut, Siri will speak the text.",

  properties: [],

  methods: [
    {
      name: "speak",
      type: "method",
      access: "static",
      description: "Speaks the provided text using text-to-speech.",
      signature: "Speech.speak(text: string): void",
      params: [
        {
          name: "text",
          type: "string",
          description: "Text to speak.",
        },
      ],
      returns: {
        type: "void",
        description: "Does not return a value.",
      },
    },
    {
      name: "stop",
      type: "method",
      access: "static",
      description: "Stops any ongoing speech.",
      signature: "Speech.stop(): void",
      params: [],
      returns: {
        type: "void",
        description: "Does not return a value.",
      },
    },
  ],
};