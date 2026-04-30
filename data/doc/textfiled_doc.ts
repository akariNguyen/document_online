import { DocModel } from "../model";

export const textFieldDoc: DocModel = {
  slug: "text-field",
  title: "TextField",

  description: "Represents a text field in an alert.",
  detail:
    "TextField configures an input field inside an Alert. You do not create TextField manually. "+
    "Instead, use Alert.addTextField() or Alert.addSecureTextField(). It supports text styling, "+
    "alignment, secure input, and keyboard type configuration.",

  properties: [
    {
      name: "placeholder",
      type: "property",
      access: "none",
      description: "Placeholder shown when the field is empty.",
      signature: "placeholder: string",
    },
    {
      name: "text",
      type: "property",
      access: "none",
      description: "Current text value of the field.",
      signature: "text: string",
    },
    {
      name: "isSecure",
      type: "property",
      access: "none",
      description: "Whether the text should be hidden.",
      signature: "isSecure: boolean",
    },
    {
      name: "font",
      type: "property",
      access: "none",
      description: "Font used for the text.",
      signature: "font: Font",
    },
    {
      name: "textColor",
      type: "property",
      access: "none",
      description: "Color used for the text.",
      signature: "textColor: Color",
    },
  ],

  methods: [
    {
      name: "centerAlignText",
      type: "method",
      access: "none",
      description: "Center aligns the text.",
      signature: "centerAlignText(): void",
      returns: {
        type: "void",
        description: "Updates the text alignment to center.",
      },
    },
    {
      name: "leftAlignText",
      type: "method",
      access: "none",
      description: "Left aligns the text.",
      signature: "leftAlignText(): void",
      returns: {
        type: "void",
        description: "Updates the text alignment to left.",
      },
    },
    {
      name: "rightAlignText",
      type: "method",
      access: "none",
      description: "Right aligns the text.",
      signature: "rightAlignText(): void",
      returns: {
        type: "void",
        description: "Updates the text alignment to right.",
      },
    },

    {
      name: "setDefaultKeyboard",
      type: "method",
      access: "none",
      description: "Uses the default keyboard.",
      signature: "setDefaultKeyboard(): void",
      returns: {
        type: "void",
        description: "Sets the keyboard type to default.",
      },
    },
    {
      name: "setDecimalPadKeyboard",
      type: "method",
      access: "none",
      description: "Uses a decimal number keyboard.",
      signature: "setDecimalPadKeyboard(): void",
      returns: {
        type: "void",
        description: "Sets the keyboard type to decimal pad.",
      },
    },
    {
      name: "setEmailAddressKeyboard",
      type: "method",
      access: "none",
      description: "Uses a keyboard optimized for email addresses.",
      signature: "setEmailAddressKeyboard(): void",
      returns: {
        type: "void",
        description: "Sets the keyboard type to email address.",
      },
    },
    {
      name: "setNumberPadKeyboard",
      type: "method",
      access: "none",
      description: "Uses a number pad keyboard.",
      signature: "setNumberPadKeyboard(): void",
      returns: {
        type: "void",
        description: "Sets the keyboard type to number pad.",
      },
    },
    {
      name: "setNumbersAndPunctuationKeyboard",
      type: "method",
      access: "none",
      description: "Uses a keyboard with numbers and punctuation.",
      signature: "setNumbersAndPunctuationKeyboard(): void",
      returns: {
        type: "void",
        description: "Sets the keyboard type to numbers and punctuation.",
      },
    },
    {
      name: "setPhonePadKeyboard",
      type: "method",
      access: "none",
      description: "Uses a phone number keyboard.",
      signature: "setPhonePadKeyboard(): void",
      returns: {
        type: "void",
        description: "Sets the keyboard type to phone pad.",
      },
    },
    {
      name: "setTwitterKeyboard",
      type: "method",
      access: "none",
      description: "Uses a keyboard optimized for @ and # input.",
      signature: "setTwitterKeyboard(): void",
      returns: {
        type: "void",
        description: "Sets the keyboard type to twitter.",
      },
    },
    {
      name: "setURLKeyboard",
      type: "method",
      access: "none",
      description: "Uses a keyboard optimized for URLs.",
      signature: "setURLKeyboard(): void",
      returns: {
        type: "void",
        description: "Sets the keyboard type to URL.",
      },
    },
    {
      name: "setWebSearchKeyboard",
      type: "method",
      access: "none",
      description: "Uses a keyboard optimized for search input.",
      signature: "setWebSearchKeyboard(): void",
      returns: {
        type: "void",
        description: "Sets the keyboard type to web search.",
      },
    },
  ],
};