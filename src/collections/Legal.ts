import type { CollectionBeforeValidateHook, CollectionConfig } from "payload";

const formatSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const populateSlug: CollectionBeforeValidateHook = ({ data, operation }) => {
  if (operation !== "create" && operation !== "update") {
    return data;
  }

  if (!data?.title) {
    return data;
  }

  if (!data.slug) {
    data.slug = formatSlug(String(data.title));
  }

  return data;
};

export const Legal: CollectionConfig = {
  slug: "legal-pages",
  labels: {
    singular: "Legal Page",
    plural: "Legal Pages",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    description:
      "Impressum, Datenschutzerklärung, AGB and other legally required pages.",
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [populateSlug],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      required: true,
      admin: {
        description:
          "Used in the URL, e.g. /legal/impressum. Auto-generated from the title if left empty.",
      },
    },
    {
      name: "summary",
      type: "textarea",
      admin: {
        description: "Optional short description shown under the page title.",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
  ],
  timestamps: true,
};
