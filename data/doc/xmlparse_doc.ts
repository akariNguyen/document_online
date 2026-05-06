import { DocModel } from "../model";

export const xmlParserDoc: DocModel = {
  slug: "xmlparser",
  title: "XMLParser",

  description: "Event driven XML parser.",
  detail:
    "The XMLParser is an event driven XML parser that calls provided callback " +
    "functions when it encounters elements to be parsed. It does not itself do any parsing.\n\n" +
    "Example:\n" +
    "let xml = '<root><item id=\"1\">Hello</item></root>'\n" +
    "let parser = new XMLParser(xml)\n" +
    "parser.didStartElement = (name, attrs) => {\n" +
    "  console.log('Start:', name, JSON.stringify(attrs))\n" +
    "}\n" +
    "parser.foundCharacters = (text) => {\n" +
    "  console.log('Text:', text)\n" +
    "}\n" +
    "parser.parse()",

  properties: [
    {
      name: "didEndDocument",
      type: "property",
      description: "Function called when the parser ends parsing a document.",
      signature: "didEndDocument: () => void",
    },
    {
      name: "didEndElement",
      type: "property",
      description: "Function called when ended parsing an element.",
      signature: "didEndElement: (name: string) => void",
    },
    {
      name: "didStartDocument",
      type: "property",
      description: "Function called when the parser begins parsing a document.",
      signature: "didStartDocument: () => void",
    },
    {
      name: "didStartElement",
      type: "property",
      description: "Function called when starting to parse an element.",
      signature:
        "didStartElement: (name: string, attrs: { [key: string]: string }) => void",
    },
    {
      name: "foundCharacters",
      type: "property",
      description: "Function called when the parser finds characters of an element.",
      signature: "foundCharacters: (text: string) => void",
    },
    {
      name: "parseErrorOccurred",
      type: "property",
      description: "Function called when the parser encounters an error.",
      signature: "parseErrorOccurred: (error: string) => void",
    },
    {
      name: "string",
      type: "property",
      description: "XML string to be parsed.",
      signature: "string: string",
    },
  ],

  methods: [
    {
      name: "XMLParser",
      type: "constructor",
      description: "Constructs an XMLParser.",
      signature: "new XMLParser(string: string)",
      params: [
        {
          name: "string",
          type: "string",
          description: "XML string to parse.",
        },
      ],
      returns: {
        type: "XMLParser",
        description: "A new XMLParser instance.",
      },
    },
    {
      name: "parse",
      type: "method",
      description: "Starts parsing.",
      signature: "parse(): void",
      params: [],
      returns: {
        type: "void",
        description: "Does not return a value.",
      },
    },
  ],
};