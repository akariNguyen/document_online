import { DocModel } from "../model";

export const sfSymbolDoc: DocModel = {
  slug: "sf-symbol",
  title: "SFSymbol",

  description: "Represents a system-style icon.",
  detail:
    "SFSymbol creates icons from a symbol name. Internally, the system maps symbols "+
    "to a cross-platform icon set (Phosphor Icons) to ensure consistent rendering. "+
    "You can adjust size and weight, then convert the symbol into an image for display.",

  properties: [
    {
      name: "size",
      type: "property",
      access: "none",
      description: "The size of the symbol.",
      signature: "size: number",
    },
    {
      name: "image",
      type: "property",
      access: "none",
      description: "Image representation of the symbol.",
      signature: "image: Promise<Image>",
    },
  ],

  methods: [
    {
      name: "named",
      type: "method",
      access: "static",
      description: "Creates a symbol from a name.",
      signature: "SFSymbol.named(name: string): SFSymbol | null",
      params: [
        {
          name: "name",
          type: "string",
          description: "Symbol name.",
        },
      ],
    },

    {
      name: "applyThinWeight",
      type: "method",
      access: "none",
      description: "Applies a thin style.",
      signature: "applyThinWeight(): void",
    },

    {
      name: "applyRegularWeight",
      type: "method",
      access: "none",
      description: "Applies a regular style.",
      signature: "applyRegularWeight(): void",
    },

    {
      name: "applyMediumWeight",
      type: "method",
      access: "none",
      description: "Applies a medium style.",
      signature: "applyMediumWeight(): void",
    },

    {
      name: "applyBoldWeight",
      type: "method",
      access: "none",
      description: "Applies a bold style.",
      signature: "applyBoldWeight(): void",
    },
  ],
};