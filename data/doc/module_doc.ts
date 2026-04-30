import { DocModel } from "../model";

export const moduleDoc: DocModel = {
  slug: "module",
  title: "module",

  description: "The current module.",
  detail:
    "Scriptable treats each file as a module. Use module.exports to expose functions, objects, or values from the current file so they can be imported with importModule().",

  properties: [
    {
      name: "exports",
      type: "property",
      access: "none",
      description: "Exported functions, objects, or values.",
      signature: "exports: any",
    },
    {
      name: "filename",
      type: "property",
      access: "none",
      description: "Path to the file containing the module.",
      signature: "filename: string",
    },
  ],

  methods: [],
};