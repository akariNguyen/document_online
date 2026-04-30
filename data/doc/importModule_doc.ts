import { DocModel } from "../model";

export const importModuleDoc: DocModel = {
  slug: "import-module",
  title: "importModule",

  description: "Imports a module by name.",
  detail:
    "Modules are imported by specifying the name of the file. For example, to import the file foo.js, call importModule('foo'). Including the file extension is optional.\n\n"
    + "The importModule function returns module.exports of the imported module.\n\n"
    + "Example:\n\n"
    + "let circle = importModule('circle')\n"
    + "let area = circle.area(2)\n"
    + "log(area)\n\n"
    + "The imported module can export functions or values using module.exports.",

  properties: [],

  methods: [
    {
      name: "importModule",
      type: "method",
      access: "none",
      description: "Imports a module by name.",
      signature: "importModule(name: string): any",
      params: [
        {
          name: "name",
          type: "string",
          description:
            "Name of the module file without extension (e.g. 'circle').",
        },
      ],
      returnType: "any",
      returnDescription:
        "The exported object from the module (module.exports).",
    },
  ],
};