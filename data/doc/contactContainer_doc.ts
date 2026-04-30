
import { DocModel } from "../model";

export const contactsContainerDoc: DocModel = {
  slug: "contacts-container",
  title: "ContactsContainer",

  description: "Collection of contacts.",
  detail:
    "Use ContactsContainer to fetch available contact containers on the device. " +
    "A contact belongs to one container, while a container may contain multiple contacts and groups. " +
    "Container data is resolved from contact accounts available on the device.",

  properties: [
    {
      name: "identifier",
      type: "property",
      access: "none",
      description: "Identifier of the contacts container.",
      signature: "identifier: string",
    },
    {
      name: "name",
      type: "property",
      access: "none",
      description: "Name of the contacts container.",
      signature: "name: string",
    },
  ],

  methods: [
    {
      name: "all",
      type: "method",
      access: "static",
      description: "Fetches all contacts containers.",
      signature: "static all(): Promise<ContactsContainer[]>",
      params: [],
    },
    {
      name: "default",
      type: "method",
      access: "static",
      description: "Fetches the default contacts container.",
      signature: "static default(): Promise<ContactsContainer>",
      params: [],
    },
    {
      name: "withIdentifier",
      type: "method",
      access: "static",
      description: "Fetches a contacts container by identifier.",
      signature:
        "static withIdentifier(identifier: string): Promise<ContactsContainer | null>",
      params: [
        {
          name: "identifier",
          type: "string",
          description: "Container identifier.",
        },
      ],
    },
  ],
};