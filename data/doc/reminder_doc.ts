import { DocModel } from "../model";

export const reminderDoc: DocModel = {
  slug: "reminder",
  title: "Reminder",

  description: "Manages reminders in calendars.",

  detail:
    "Used for creating, fetching and removing reminders from your calendars.",

  properties: [
    {
      name: "calendar",
      type: "property",
      description:
        "Calendar the reminder is stored in.",
      signature: "calendar: Calendar",
    },

    {
      name: "completionDate",
      type: "property",
      description:
        "Completion date of reminder.",
      signature: "completionDate: Date",
    },

    {
      name: "creationDate",
      type: "property",
      description:
        "Creation date of reminder.",
      signature: "creationDate: Date",
    },

    {
      name: "dueDate",
      type: "property",
      description:
        "Due date of reminder.",
      signature: "dueDate: Date",
    },

    {
      name: "dueDateIncludesTime",
      type: "property",
      description:
        "Whether the due date includes a time.",
      signature: "dueDateIncludesTime: boolean",
    },

    {
      name: "identifier",
      type: "property",
      description:
        "Identifier of reminder.",
      signature: "identifier: string",
    },

    {
      name: "isCompleted",
      type: "property",
      description:
        "Whether the reminder is completed.",
      signature: "isCompleted: boolean",
    },

    {
      name: "isOverdue",
      type: "property",
      description:
        "Whether the reminder is overdue.",
      signature: "isOverdue: boolean",
    },

    {
      name: "notes",
      type: "property",
      description:
        "Notes associated with reminder.",
      signature: "notes: string",
    },

    {
      name: "priority",
      type: "property",
      description:
        "Priority of reminder.",
      signature: "priority: number",
    },

    {
      name: "title",
      type: "property",
      description:
        "Title of reminder.",
      signature: "title: string",
    },
  ],

  methods: [
    {
      name: "Reminder",
      type: "constructor",
      description:
        "Constructs a reminder.",
      signature: "new Reminder()",
      params: [],
      returns: {
        type: "Reminder",
        description:
          "A new Reminder instance.",
      },
    },

    {
      name: "addRecurrenceRule",
      type: "method",
      description:
        "Adds a recurrence rule.",
      signature:
        "addRecurrenceRule(recurrenceRule: RecurrenceRule): void",
      params: [
        {
          name: "recurrenceRule",
          type: "RecurrenceRule",
          description:
            "Recurrence rule to add.",
        },
      ],
      returns: {
        type: "void",
        description:
          "Does not return a value.",
      },
    },

    {
      name: "all",
      type: "method",
      access: "static",
      description:
        "Fetches all reminders.",
      signature:
        "Reminder.all(calendars?: Calendar[]): Promise<Reminder[]>",
      params: [
        {
          name: "calendars",
          type: "Calendar[]",
          description:
            "Calendars to fetch reminders from.",
        },
      ],
      returns: {
        type: "Promise<Reminder[]>",
        description:
          "All reminders.",
      },
    },

    {
      name: "allCompleted",
      type: "method",
      access: "static",
      description:
        "Fetches all completed reminders.",
      signature:
        "Reminder.allCompleted(calendars?: Calendar[]): Promise<Reminder[]>",
      params: [
        {
          name: "calendars",
          type: "Calendar[]",
          description:
            "Calendars to fetch reminders from.",
        },
      ],
      returns: {
        type: "Promise<Reminder[]>",
        description:
          "Completed reminders.",
      },
    },

    {
      name: "save",
      type: "method",
      description:
        "Saves reminder.",
      signature: "save(): Promise<void>",
      params: [],
      returns: {
        type: "Promise<void>",
        description:
          "Promise resolved when reminder has been saved.",
      },
    },

    {
      name: "remove",
      type: "method",
      description:
        "Removes reminder from calendar.",
      signature: "remove(): Promise<void>",
      params: [],
      returns: {
        type: "Promise<void>",
        description:
          "Promise resolved when reminder has been removed.",
      },
    },

    {
      name: "removeAllRecurrenceRules",
      type: "method",
      description:
        "Removes all recurrence rules.",
      signature: "removeAllRecurrenceRules(): void",
      params: [],
      returns: {
        type: "void",
        description:
          "Does not return a value.",
      },
    },

    {
      name: "scheduled",
      type: "method",
      access: "static",
      description:
        "Fetches the schedule of reminders.",
      signature:
        "Reminder.scheduled(calendars?: Calendar[]): Promise<Reminder[]>",
      params: [
        {
          name: "calendars",
          type: "Calendar[]",
          description:
            "Calendars to fetch reminders from.",
        },
      ],
      returns: {
        type: "Promise<Reminder[]>",
        description:
          "Scheduled reminders.",
      },
    },
  ],
};