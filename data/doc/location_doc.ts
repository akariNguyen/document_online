import { DocModel } from "../model";

export const locationDoc: DocModel = {
  slug: "location",
  title: "Location",

  description: "Fetches your location.",
  detail:
    "Uses GPS, WiFi, and cellular hardware to determine your location. The first time you use the API, the application will prompt you to authorize access. If you do not authorize access, the application cannot fetch your location.",

  properties: [],

  methods: [
    {
      name: "current",
      type: "method",
      access: "static",
      description: "Fetches your current location.",
      signature: "static current(): Promise<Record<string, number>>",
      params: [],
      returnType: "Promise<Record<string, number>>",
      returnDescription:
        "Location object containing latitude, longitude, altitude, horizontalAccuracy, and verticalAccuracy.",
    },
    {
      name: "reverseGeocode",
      type: "method",
      access: "static",
      description: "Performs reverse geocoding for a location.",
      signature:
        "static reverseGeocode(latitude: number, longitude: number, locale?: string): Promise<Record<string, any>[]>",
      params: [
        { name: "latitude", type: "number", description: "Latitude." },
        { name: "longitude", type: "number", description: "Longitude." },
        {
          name: "locale",
          type: "string",
          description: "Optional locale, such as \"en-US\" or \"vi-VN\".",
        },
      ],
      returnType: "Promise<Record<string, any>[]>",
      returnDescription: "List of placemark/address results.",
    },
    {
      name: "setAccuracyToBest",
      type: "method",
      access: "static",
      description: "Uses the best accuracy. This is the default.",
      signature: "static setAccuracyToBest(): void",
      params: [],
      returnType: "void",
    },
    {
      name: "setAccuracyToTenMeters",
      type: "method",
      access: "static",
      description: "Sets accuracy to within ten meters.",
      signature: "static setAccuracyToTenMeters(): void",
      params: [],
      returnType: "void",
    },
    {
      name: "setAccuracyToHundredMeters",
      type: "method",
      access: "static",
      description: "Sets accuracy to within hundred meters.",
      signature: "static setAccuracyToHundredMeters(): void",
      params: [],
      returnType: "void",
    },
    {
      name: "setAccuracyToKilometer",
      type: "method",
      access: "static",
      description: "Sets accuracy to within one kilometer.",
      signature: "static setAccuracyToKilometer(): void",
      params: [],
      returnType: "void",
    },
    {
      name: "setAccuracyToThreeKilometers",
      type: "method",
      access: "static",
      description: "Sets accuracy to within three kilometers.",
      signature: "static setAccuracyToThreeKilometers(): void",
      params: [],
      returnType: "void",
    },
  ],
};