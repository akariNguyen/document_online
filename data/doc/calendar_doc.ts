import { DocModel } from "../model";

export const calendarDoc: DocModel = {
  slug: "calendar",
  title: "Calendar",

  name: "Calendar",
  kind: "Type",

  description: "Represents a calendar.",
  shortDescription: "Represents a calendar.",

  detail:
    "Use the Calendar type to fetch, create, or remove calendars. Calendars are used together with CalendarEvent or Reminder when managing events and reminders.",
  longDescription:
    "Use the Calendar type to fetch, create, or remove calendars. Calendars are used together with CalendarEvent or Reminder when managing events and reminders.",

  properties: [],

  methods: [
    {
      name: "defaultForEvents",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns the default calendar for events.",
      signature: "static defaultForEvents(): Calendar",
      returns: {
        type: "Calendar",
        description: "Default calendar for events.",
      },
      returnType: "Calendar",
      returnDescription: "Default calendar for events.",
    },

    {
      name: "forEvents",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns all calendars available for events.",
      signature: "static forEvents(): Calendar[]",
      returns: {
        type: "Calendar[]",
        description: "List of calendars.",
      },
      returnType: "Calendar[]",
      returnDescription: "List of calendars.",
    },

    {
      name: "forEventsByTitle",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns calendars matching the given title.",
      signature: "static forEventsByTitle(title: string): Calendar[]",
      params: [
        {
          name: "title",
          type: "string",
          description: "Calendar title.",
        },
      ],
      parameters: [
        {
          name: "title",
          type: "string",
          description: "Calendar title.",
        },
      ],
      returns: {
        type: "Calendar[]",
        description: "Matching calendars.",
      },
      returnType: "Calendar[]",
      returnDescription: "Matching calendars.",
    },

    {
      name: "defaultForReminders",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns the default calendar for reminders.",
      signature: "static defaultForReminders(): Calendar",
      returns: {
        type: "Calendar",
        description: "Default reminder calendar.",
      },
      returnType: "Calendar",
      returnDescription: "Default reminder calendar.",
    },

    {
      name: "forReminders",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns all calendars available for reminders.",
      signature: "static forReminders(): Calendar[]",
      returns: {
        type: "Calendar[]",
        description: "List of reminder calendars.",
      },
      returnType: "Calendar[]",
      returnDescription: "List of reminder calendars.",
    },

    {
      name: "forRemindersByTitle",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Returns reminder calendars matching the given title.",
      signature: "static forRemindersByTitle(title: string): Calendar[]",
      params: [
        {
          name: "title",
          type: "string",
          description: "Calendar title.",
        },
      ],
      parameters: [
        {
          name: "title",
          type: "string",
          description: "Calendar title.",
        },
      ],
      returns: {
        type: "Calendar[]",
        description: "Matching reminder calendars.",
      },
      returnType: "Calendar[]",
      returnDescription: "Matching reminder calendars.",
    },

    {
      name: "createForReminders",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Creates a new calendar for reminders.",
      signature: "static createForReminders(title: string): Calendar",
      params: [
        {
          name: "title",
          type: "string",
          description: "Calendar title.",
        },
      ],
      parameters: [
        {
          name: "title",
          type: "string",
          description: "Calendar title.",
        },
      ],
      returns: {
        type: "Calendar",
        description: "Created calendar.",
      },
      returnType: "Calendar",
      returnDescription: "Created calendar.",
    },

    {
      name: "findOrCreateForReminders",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Finds or creates a reminder calendar.",
      signature: "static findOrCreateForReminders(title: string): Calendar",
      params: [
        {
          name: "title",
          type: "string",
          description: "Calendar title.",
        },
      ],
      parameters: [
        {
          name: "title",
          type: "string",
          description: "Calendar title.",
        },
      ],
      returns: {
        type: "Calendar",
        description: "Existing or created calendar.",
      },
      returnType: "Calendar",
      returnDescription: "Existing or created calendar.",
    },

    {
      name: "supportsAvailability",
      type: "method",
      access: "static",
      isStatic: true,
      description: "Checks whether the given availability is supported.",
      signature: "static supportsAvailability(availability: number): boolean",
      params: [
        {
          name: "availability",
          type: "number",
          description: "Availability value.",
        },
      ],
      parameters: [
        {
          name: "availability",
          type: "number",
          description: "Availability value.",
        },
      ],
      returns: {
        type: "boolean",
        description: "True if supported.",
      },
      returnType: "boolean",
      returnDescription: "True if supported.",
    },

    {
      name: "save",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Saves the calendar.",
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
      description: "Removes the calendar.",
      signature: "remove(): void",
      returns: {
        type: "void",
      },
      returnType: "void",
    },

    {
      name: "presentPicker",
      type: "method",
      access: "none",
      isStatic: false,
      description: "Presents a calendar picker view (not supported yet).",
      signature: "presentPicker(): Promise<void>",
      returns: {
        type: "Promise",
        description: "Resolves after picker is closed.",
      },
      returnType: "Promise",
      returnDescription: "Resolves after picker is closed.",
    },
  ],
};