import { DocModel } from "../model";

export const dictationDoc: DocModel = {
  slug: "dictation",
  title: "Dictation",

  description: "Speech-to-text using device dictation.",
  detail:
    "Dictation captures speech input from the user and converts it to text. Use Dictation.start() to start speech recognition. You can optionally pass a locale string such as \"en-US\" or \"vi-VN\" to prefer a recognition language.",

  properties: [],

  methods: [
    {
      name: "start",
      type: "method",
      access: "static",
      description: "Starts dictation with a preferred locale.",
      signature: "static start(locale: string): Promise<string>",
      params: [
        {
          name: "locale",
          type: "string",
          description:
            "Preferred recognition locale, such as \"en-US\" or \"vi-VN\".",
        },
      ],
      returnType: "Promise<string>",
      returnDescription:
        "Transcribed text. Returns an empty string if no text is recognized.",
    },
  ],
};