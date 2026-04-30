import { DocModel } from "../model";

export const timerDoc: DocModel = {
  slug: "timer",
  title: "Timer",

  description: "Schedules code to run after a delay.",
  detail:
    "Timer executes a callback after a configured delay. It can run once or repeat at the same interval until invalidated.",

  properties: [
    {
      name: "timeInterval",
      type: "property",
      access: "none",
      description: "Delay before the timer fires, in milliseconds.",
      signature: "timeInterval: number",
    },
    {
      name: "repeats",
      type: "property",
      access: "none",
      description: "Whether the timer should repeat after firing.",
      signature: "repeats: boolean",
    },
   
  ],

  methods: [
    {
      name: "Timer",
      type: "constructor",
      access: "none",
      description: "Creates a new timer.",
      signature: "new Timer()",
      returns: {
        type: "Timer",
        description: "A new Timer object.",
      },
    },

    {
      name: "schedule",
      type: "method",
      access: "none",
      description: "Schedules the timer with a callback.",
      signature: "schedule(callback: Function): void",
      params: [
        {
          name: "callback",
          type: "Function",
          description: "Function to run when the timer fires.",
        },
      ],
      returns: {
        type: "void",
        description: "Starts the timer.",
      },
    },

    {
      name: "invalidate",
      type: "method",
      access: "none",
      description: "Stops the timer.",
      signature: "invalidate(): void",
      returns: {
        type: "void",
        description: "Cancels the timer and prevents future callbacks.",
      },
    },

    {
      name: "schedule",
      type: "method",
      access: "static",
      description: "Creates and schedules a timer in one call.",
      signature:
        "Timer.schedule(timeInterval: number, repeats: boolean, callback: Function): Timer",
      params: [
        {
          name: "timeInterval",
          type: "number",
          description: "Delay in milliseconds.",
        },
        {
          name: "repeats",
          type: "boolean",
          description: "Whether the timer should repeat.",
        },
        {
          name: "callback",
          type: "Function",
          description: "Function to run when the timer fires.",
        },
      ],
      returns: {
        type: "Timer",
        description: "The scheduled Timer object.",
      },
    },
  ],
};