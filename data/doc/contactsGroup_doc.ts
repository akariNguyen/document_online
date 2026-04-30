import { DocModel } from "../model";

export const contactsGroupDoc: DocModel = {
  slug: "contacts-group",
  title: "ContactsGroup",

  description: "Group of contacts in the address book.",
  detail:
    "Use ContactsGroup to create, fetch, update, and delete contact groups. " +
    "A group belongs to a container and can contain multiple contacts. " +
    "Members can be added to or removed from the group directly.",

  properties: [
    {
      name: "identifier",
      type: "property",
      access: "none",
      description: "Identifier of the contacts group.",
      signature: "identifier: string",
    },
    {
      name: "name",
      type: "property",
      access: "none",
      description: "Name of the contacts group.",
      signature: "name: string",
    },
  ],

  methods: [
    {
      name: "new ContactsGroup",
      type: "constructor",
      access: "none",
      description: "Constructs a contacts group.",
      signature: "new ContactsGroup()",
    },

    {
      name: "add",
      type: "method",
      access: "static",
      description: "Creates a contacts group.",
      signature:
        "static add(group: ContactsGroup, containerIdentifier?: string): Promise<void>",
      params: [
        { name: "group", type: "ContactsGroup", description: "Group to create." },
        { name: "containerIdentifier", type: "string", description: "Optional container identifier." },
      ],
    },

    {
      name: "all",
      type: "method",
      access: "static",
      description: "Fetches groups.",
      signature:
        "static all(containers?: ContactsContainer[]): Promise<ContactsGroup[]>",
      params: [
        { name: "containers", type: "ContactsContainer[]", description: "Optional containers." },
      ],
    },

    {
      name: "withIdentifier",
      type: "method",
      access: "static",
      description: "Fetches group by id.",
      signature:
        "static withIdentifier(id: string): Promise<ContactsGroup | null>",
      params: [{ name: "id", type: "string", description: "Group id." }],
    },

    {
      name: "update",
      type: "method",
      access: "static",
      description: "Updates group.",
      signature: "static update(group: ContactsGroup): Promise<void>",
      params: [{ name: "group", type: "ContactsGroup", description: "Group." }],
    },

    {
      name: "delete",
      type: "method",
      access: "static",
      description: "Deletes group.",
      signature: "static delete(group: ContactsGroup): Promise<void>",
      params: [{ name: "group", type: "ContactsGroup", description: "Group." }],
    },

   

    {
      name: "addMember",
      type: "method",
      access: "none",
      description: "Adds contact to group.",
      signature: "addMember(contact: Contact): Promise<void>",
      params: [{ name: "contact", type: "Contact", description: "Contact." }],
    },

    {
      name: "removeMember",
      type: "method",
      access: "none",
      description: "Removes contact from group.",
      signature: "removeMember(contact: Contact): Promise<void>",
      params: [{ name: "contact", type: "Contact", description: "Contact." }],
    },

    {
      name: "hasMember",
      type: "method",
      access: "none",
      description: "Checks membership.",
      signature: "hasMember(contact: Contact): boolean",
      params: [{ name: "contact", type: "Contact", description: "Contact." }],
    },
  ],
};