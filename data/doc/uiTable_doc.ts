import { DocModel } from "../model";

export const uiTableCellDoc: DocModel = {
  slug: "ui-table-cell",
  title: "UITableCell",

  description: "Represents a cell in a UITableRow.",
  detail:
    "UITableCell is used inside UITableRow. A cell can display text, an image, or a button. Cells are arranged horizontally in the row.",

  properties: [
    { name: "dismissOnTap", type: "property", access: "none", description: "Whether the table should dismiss when the cell is tapped.", signature: "dismissOnTap: boolean" },
    { name: "onTap", type: "property", access: "none", description: "Callback called when the cell is tapped.", signature: "onTap: Function" },
    { name: "subtitleColor", type: "property", access: "none", description: "Color of the subtitle.", signature: "subtitleColor: Color" },
    { name: "subtitleFont", type: "property", access: "none", description: "Font of the subtitle.", signature: "subtitleFont: Font" },
    { name: "titleColor", type: "property", access: "none", description: "Color of the title.", signature: "titleColor: Color" },
    { name: "titleFont", type: "property", access: "none", description: "Font of the title.", signature: "titleFont: Font" },
    { name: "widthWeight", type: "property", access: "none", description: "Relative width weight of the cell.", signature: "widthWeight: number" },
  ],

  methods: [
    {
      name: "button",
      type: "method",
      access: "static",
      description: "Creates a button cell.",
      signature: "UITableCell.button(title: string): UITableCell",
      params: [{ name: "title", type: "string", description: "Button title." }],
      returns: { type: "UITableCell", description: "A button cell." },
    },
    {
      name: "image",
      type: "method",
      access: "static",
      description: "Creates an image cell from image data.",
      signature: "UITableCell.image(image: Image | string): UITableCell",
      params: [{ name: "image", type: "Image | string", description: "Image or base64 image data." }],
      returns: { type: "UITableCell", description: "An image cell." },
    },
    {
      name: "imageAtURL",
      type: "method",
      access: "static",
      description: "Creates an image cell from a URL.",
      signature: "UITableCell.imageAtURL(url: string): UITableCell",
      params: [{ name: "url", type: "string", description: "Image URL." }],
      returns: { type: "UITableCell", description: "An image cell." },
    },
    {
      name: "text",
      type: "method",
      access: "static",
      description: "Creates a text cell.",
      signature: "UITableCell.text(title: string, subtitle?: string): UITableCell",
      params: [
        { name: "title", type: "string", description: "Main text." },
        { name: "subtitle", type: "string", description: "Secondary text." },
      ],
      returns: { type: "UITableCell", description: "A text cell." },
    },
    {
      name: "centerAligned",
      type: "method",
      access: "none",
      description: "Center aligns the cell content.",
      signature: "centerAligned(): void",
      returns: { type: "void", description: "Updates the alignment to center." },
    },
    {
      name: "leftAligned",
      type: "method",
      access: "none",
      description: "Left aligns the cell content.",
      signature: "leftAligned(): void",
      returns: { type: "void", description: "Updates the alignment to left." },
    },
    {
      name: "rightAligned",
      type: "method",
      access: "none",
      description: "Right aligns the cell content.",
      signature: "rightAligned(): void",
      returns: { type: "void", description: "Updates the alignment to right." },
    },
  ],
};

export const uiTableRowDoc: DocModel = {
  slug: "ui-table-row",
  title: "UITableRow",

  description: "Represents a row in a UITable.",
  detail:
    "UITableRow is added to a UITable. Rows are displayed vertically in the table, and each row contains cells displayed horizontally.",

  properties: [
    { name: "backgroundColor", type: "property", access: "none", description: "Background color of the row.", signature: "backgroundColor: Color" },
    { name: "cellSpacing", type: "property", access: "none", description: "Spacing between cells.", signature: "cellSpacing: number" },
    { name: "dismissOnSelect", type: "property", access: "none", description: "Whether the table should dismiss when the row is selected.", signature: "dismissOnSelect: boolean" },
    { name: "height", type: "property", access: "none", description: "Height of the row.", signature: "height: number" },
    { name: "isHeader", type: "property", access: "none", description: "Whether the row is a header.", signature: "isHeader: boolean" },
    { name: "onSelect", type: "property", access: "none", description: "Callback called when the row is selected.", signature: "onSelect: Function" },
  ],

  methods: [
    {
      name: "UITableRow",
      type: "constructor",
      access: "none",
      description: "Creates a new row.",
      signature: "new UITableRow()",
      returns: { type: "UITableRow", description: "A new table row." },
    },
    {
      name: "addText",
      type: "method",
      access: "none",
      description: "Adds a text cell to the row.",
      signature: "addText(title: string, subtitle?: string): UITableCell",
      params: [
        { name: "title", type: "string", description: "Main text." },
        { name: "subtitle", type: "string", description: "Secondary text." },
      ],
      returns: { type: "UITableCell", description: "The added text cell." },
    },
    {
      name: "addImage",
      type: "method",
      access: "none",
      description: "Adds an image cell to the row.",
      signature: "addImage(image: Image | string): UITableCell",
      params: [{ name: "image", type: "Image | string", description: "Image or base64 image data." }],
      returns: { type: "UITableCell", description: "The added image cell." },
    },
    {
      name: "addImageAtURL",
      type: "method",
      access: "none",
      description: "Adds an image cell from a URL.",
      signature: "addImageAtURL(url: string): UITableCell",
      params: [{ name: "url", type: "string", description: "Image URL." }],
      returns: { type: "UITableCell", description: "The added image cell." },
    },
    {
      name: "addButton",
      type: "method",
      access: "none",
      description: "Adds a button cell to the row.",
      signature: "addButton(title: string): UITableCell",
      params: [{ name: "title", type: "string", description: "Button title." }],
      returns: { type: "UITableCell", description: "The added button cell." },
    },
    {
      name: "addCell",
      type: "method",
      access: "none",
      description: "Adds an existing cell to the row.",
      signature: "addCell(cell: UITableCell): void",
      params: [{ name: "cell", type: "UITableCell", description: "Cell to add." }],
      returns: { type: "void", description: "Adds the cell to the row." },
    },
  ],
};

export const uiTableDoc: DocModel = {
  slug: "ui-table",
  title: "UITable",

  description: "Renders a table.",
  detail:
    "UITable displays structured content using rows and cells. Rows are shown vertically, and cells inside each row are shown horizontally.",

  properties: [
    {
      name: "showSeparators",
      type: "property",
      access: "none",
      description: "Whether row separators should be shown.",
      signature: "showSeparators: boolean",
    },
  ],

  methods: [
    {
      name: "UITable",
      type: "constructor",
      access: "none",
      description: "Creates a new table.",
      signature: "new UITable()",
      returns: { type: "UITable", description: "A new table object." },
    },
    {
      name: "addRow",
      type: "method",
      access: "none",
      description: "Adds a row to the table.",
      signature: "addRow(row: UITableRow): void",
      params: [{ name: "row", type: "UITableRow", description: "Row to add." }],
      returns: { type: "void", description: "Adds the row to the table." },
    },
    {
      name: "removeRow",
      type: "method",
      access: "none",
      description: "Removes a row from the table.",
      signature: "removeRow(row: UITableRow): void",
      params: [{ name: "row", type: "UITableRow", description: "Row to remove." }],
      returns: { type: "void", description: "Removes the row from the table." },
    },
    {
      name: "removeAllRows",
      type: "method",
      access: "none",
      description: "Removes all rows from the table.",
      signature: "removeAllRows(): void",
      returns: { type: "void", description: "Clears all rows." },
    },
    {
      name: "present",
      type: "method",
      access: "none",
      description: "Presents the table.",
      signature: "present(fullscreen?: boolean): Promise<void>",
      params: [{ name: "fullscreen", type: "boolean", description: "Whether to present fullscreen." }],
      returns: { type: "Promise<void>", description: "Resolves after the table is dismissed." },
    },
    {
      name: "reload",
      type: "method",
      access: "none",
      description: "Reloads the table.",
      signature: "reload(): void",
      returns: { type: "void", description: "Refreshes the table content." },
    },
  ],
};