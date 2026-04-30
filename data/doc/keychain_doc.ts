import { DocModel } from "../model";

export const keychainDoc: DocModel = {
  slug: "keychain",
  title: "Keychain",

  description: "Secure storage for credentials.",
  detail:
    "The keychain is a secure storage for credentials, keys, and other sensitive data. Use set() to store a value and get() to retrieve it later. Values are encrypted and persist across app launches.",

  properties: [],

  methods: [
    {
      name: "contains",
      type: "method",
      access: "static",
      description: "Checks if a value exists for the given key.",
      signature: "static contains(key: string): Promise<boolean>",
      params: [
        {
          name: "key",
          type: "string",
          description: "Key to check.",
        },
      ],
      returnType: "Promise<boolean>",
      returnDescription: "True if the key exists.",
    },

    {
      name: "get",
      type: "method",
      access: "static",
      description: "Reads a value from the keychain.",
      signature: "static get(key: string): Promise<string | null>",
      params: [
        {
          name: "key",
          type: "string",
          description: "Key to read.",
        },
      ],
      returnType: "Promise<string | null>",
      returnDescription: "Stored value, or null if not found.",
    },

    {
      name: "set",
      type: "method",
      access: "static",
      description: "Stores a value securely.",
      signature: "static set(key: string, value: string): Promise<void>",
      params: [
        {
          name: "key",
          type: "string",
          description: "Key to store.",
        },
        {
          name: "value",
          type: "string",
          description: "Value to store.",
        },
      ],
      returnType: "Promise<void>",
    },

    {
      name: "remove",
      type: "method",
      access: "static",
      description: "Removes a value from the keychain.",
      signature: "static remove(key: string): Promise<void>",
      params: [
        {
          name: "key",
          type: "string",
          description: "Key to remove.",
        },
      ],
      returnType: "Promise<void>",
    },
  ],
};