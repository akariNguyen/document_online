import { DocModel } from "../model";

export const calendarEventDoc: DocModel = {
  slug: "calendar-event",
  title: "CalendarEvent",

  name: "CalendarEvent",
  kind: "Type",

  description: "Represents an event in a calendar.",
  shortDescription: "Represents an event in a calendar.",

  detail:
    "Use CalendarEvent to create, read, update, and delete events. An event contains time information such as startDate and endDate, and can be saved into a calendar.",
  longDescription:
    "Use CalendarEvent to create, read, update, and delete events. An event contains time information such as startDate and endDate, and can be saved into a calendar.",

  properties: [
    {
      name: "title",
      type: "property",
      access: "none",
      description: "Event title.",
      longDescription: "The text shown as the main name of the event.",
      signature: "title: string",
    },
    {
      name: "startDate",
      type: "property",
      access: "none",
      description: "Event start date.",
      longDescription: "The date and time when the event begins.",
      signature: "startDate: Date",
    },
    {
      name: "endDate",
      type: "property",
      access: "none",
      description: "Event end date.",
      longDescription: "The date and time when the event ends.",
      signature: "endDate: Date",
    },
  ],

  methods: [
    {
      name: "CalendarEvent",
      type: "constructor",
      access: "none",
      isStatic: false,
      description: "Creates a new empty calendar event.",
      signature: "new CalendarEvent()",
    },

    {
      name: "save",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Saves the event.",
      signature: "save(): void",
      returns: {
        type: "void",
      },
      returnType: "void",
    },

    {
      name: "remove",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Deletes the event from its calendar.",
      signature: "remove(): void",
      returns: {
        type: "void",
      },
      returnType: "void",
    },

    {
      name: "today",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns events scheduled for today.",
      signature: "static today(calendars?: Calendar[]): CalendarEvent[]",
      params: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      parameters: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      returns: {
        type: "CalendarEvent[]",
        description: "Events occurring today.",
      },
      returnType: "CalendarEvent[]",
      returnDescription: "Events occurring today.",
    },

    {
      name: "tomorrow",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns events scheduled for tomorrow.",
      signature: "static tomorrow(calendars?: Calendar[]): CalendarEvent[]",
      params: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      parameters: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      returns: {
        type: "CalendarEvent[]",
        description: "Events occurring tomorrow.",
      },
      returnType: "CalendarEvent[]",
      returnDescription: "Events occurring tomorrow.",
    },

    {
      name: "yesterday",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns events from yesterday.",
      signature: "static yesterday(calendars?: Calendar[]): CalendarEvent[]",
      params: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      parameters: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      returns: {
        type: "CalendarEvent[]",
        description: "Events from yesterday.",
      },
      returnType: "CalendarEvent[]",
      returnDescription: "Events from yesterday.",
    },

    {
      name: "thisWeek",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns events for the current week.",
      signature: "static thisWeek(calendars?: Calendar[]): CalendarEvent[]",
      params: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      parameters: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      returns: {
        type: "CalendarEvent[]",
        description: "Events in the current week.",
      },
      returnType: "CalendarEvent[]",
      returnDescription: "Events in the current week.",
    },

    {
      name: "nextWeek",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns events for the next week.",
      signature: "static nextWeek(calendars?: Calendar[]): CalendarEvent[]",
      params: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      parameters: [
        {
          name: "calendars",
          type: "Calendar[]",
          description: "Optional list of calendars to search in.",
          optional: true,
        },
      ],
      returns: {
        type: "CalendarEvent[]",
        description: "Events in the next week.",
      },
      returnType: "CalendarEvent[]",
      returnDescription: "Events in the next week.",
    },
  ],
};