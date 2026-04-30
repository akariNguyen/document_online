import { DocModel } from "../model";

export const datePickerDoc: DocModel = {
  slug: "date-picker",
  title: "DatePicker",

  description: "Presents a date picker.",
  detail:
    "Use the date picker to select a date or countdown duration. " +
    "After configuring the picker, call pickTime(), pickDate(), " +
    "pickDateAndTime(), or pickCountdownDuration() to present it modally.",

  properties: [
    {
      name: "countdownDuration",
      type: "property",
      access: "none",
      description: "Countdown duration displayed by the date picker.",
      signature: "countdownDuration: number",
    },
    {
      name: "initialDate",
      type: "property",
      access: "none",
      description: "The initially selected date.",
      signature: "initialDate: Date",
    },
    {
      name: "maximumDate",
      type: "property",
      access: "none",
      description: "Maximum selectable date.",
      signature: "maximumDate: Date | null",
    },
    {
      name: "minimumDate",
      type: "property",
      access: "none",
      description: "Minimum selectable date.",
      signature: "minimumDate: Date | null",
    },
    {
      name: "minuteInterval",
      type: "property",
      access: "none",
      description: "Interval at which the picker displays minutes.",
      signature: "minuteInterval: number",
    },
  ],

  methods: [
    {
      name: "DatePicker",
      type: "constructor",
      access: "none",
      description: "Constructs a new date picker.",
      signature: "new DatePicker()",
    },
    {
      name: "pickCountdownDuration",
      type: "method",
      access: "none",
      description:
        "Presents the date picker for selecting the duration of a countdown.",
      signature: "pickCountdownDuration(): Promise<number | null>",
      params: [],
    },
    {
      name: "pickDate",
      type: "method",
      access: "none",
      description: "Presents the date picker displaying day, month, and year.",
      signature: "pickDate(): Promise<Date | null>",
      params: [],
    },
    {
      name: "pickDateAndTime",
      type: "method",
      access: "none",
      description: "Presents the date picker displaying date and time.",
      signature: "pickDateAndTime(): Promise<Date | null>",
      params: [],
    },
    {
      name: "pickTime",
      type: "method",
      access: "none",
      description: "Presents the date picker displaying hours and minutes.",
      signature: "pickTime(): Promise<Date | null>",
      params: [],
    },
  ],
};