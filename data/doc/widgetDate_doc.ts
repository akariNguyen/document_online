import { DocModel } from "../model";

export const widgetDateDoc: DocModel = {
  slug: "widget-date",
  title: "WidgetDate",

  description: "Represents a date element in a widget.",
  detail:
    "WidgetDate displays a Date inside a ListWidget. You do not create WidgetDate manually. "
    + "Instead, call addDate() on a ListWidget. The date can be shown as a full date, time, "
    + "relative text, offset, or timer.",

  properties: [
    {
      name: "date",
      type: "property",
      access: "none",
      description: "Date shown in the widget.",
      signature: "date: Date",
    },
    {
      name: "font",
      type: "property",
      access: "none",
      description: "Font used for the date text.",
      signature: "font: Font",
    },
    {
      name: "lineLimit",
      type: "property",
      access: "none",
      description: "Maximum number of lines.",
      signature: "lineLimit: number",
    },
    {
      name: "minimumScaleFactor",
      type: "property",
      access: "none",
      description: "Minimum scale factor for shrinking text.",
      signature: "minimumScaleFactor: number",
    },
    {
      name: "shadowColor",
      type: "property",
      access: "none",
      description: "Color of the text shadow.",
      signature: "shadowColor: Color",
    },
    {
      name: "shadowOffset",
      type: "property",
      access: "none",
      description: "Offset of the text shadow.",
      signature: "shadowOffset: Point",
    },
    {
      name: "shadowRadius",
      type: "property",
      access: "none",
      description: "Blur radius of the text shadow.",
      signature: "shadowRadius: number",
    },
    {
      name: "textColor",
      type: "property",
      access: "none",
      description: "Color of the date text.",
      signature: "textColor: Color",
    },
    {
      name: "textOpacity",
      type: "property",
      access: "none",
      description: "Opacity of the date text.",
      signature: "textOpacity: number",
    },
    {
      name: "url",
      type: "property",
      access: "none",
      description: "URL opened when the date element is tapped.",
      signature: "url: string",
    },
  ],

  methods: [
    {
      name: "applyDateStyle",
      type: "method",
      access: "none",
      description: "Displays the full date.",
      signature: "applyDateStyle(): void",
      returns: {
        type: "void",
        description: "Sets the display style to date.",
      },
    },
    {
      name: "applyOffsetStyle",
      type: "method",
      access: "none",
      description: "Displays the date as an offset from now.",
      signature: "applyOffsetStyle(): void",
      returns: {
        type: "void",
        description: "Sets the display style to offset.",
      },
    },
    {
      name: "applyRelativeStyle",
      type: "method",
      access: "none",
      description: "Displays the date relative to now.",
      signature: "applyRelativeStyle(): void",
      returns: {
        type: "void",
        description: "Sets the display style to relative.",
      },
    },
    {
      name: "applyTimerStyle",
      type: "method",
      access: "none",
      description: "Displays the date as a timer.",
      signature: "applyTimerStyle(): void",
      returns: {
        type: "void",
        description: "Sets the display style to timer.",
      },
    },
    {
      name: "applyTimeStyle",
      type: "method",
      access: "none",
      description: "Displays the time component of the date.",
      signature: "applyTimeStyle(): void",
      returns: {
        type: "void",
        description: "Sets the display style to time.",
      },
    },

    {
      name: "centerAlignText",
      type: "method",
      access: "none",
      description: "Center aligns the date text.",
      signature: "centerAlignText(): void",
      returns: {
        type: "void",
        description: "Sets text alignment to center.",
      },
    },
    {
      name: "leftAlignText",
      type: "method",
      access: "none",
      description: "Left aligns the date text.",
      signature: "leftAlignText(): void",
      returns: {
        type: "void",
        description: "Sets text alignment to left.",
      },
    },
    {
      name: "rightAlignText",
      type: "method",
      access: "none",
      description: "Right aligns the date text.",
      signature: "rightAlignText(): void",
      returns: {
        type: "void",
        description: "Sets text alignment to right.",
      },
    },

    {
      name: "applyFormatter",
      type: "method",
      access: "none",
      description: "Formats the date using a DateFormatter.",
      signature: "applyFormatter(formatter: DateFormatter): void",
      params: [
        {
          name: "formatter",
          type: "DateFormatter",
          description: "Formatter used to convert the date to fixed text.",
        },
      ],
      returns: {
        type: "void",
        description: "Stores formatted text for this date element.",
      },
    },
    {
      name: "clearFormatter",
      type: "method",
      access: "none",
      description: "Removes the custom formatter result.",
      signature: "clearFormatter(): void",
      returns: {
        type: "void",
        description: "Clears fixed formatted text and returns to date styling.",
      },
    },
  ],
};