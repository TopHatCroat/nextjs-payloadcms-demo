import { CollectionConfig } from "payload/types"

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      minLength: 40,
      maxLength: 160,
    },
    {
      name: "keywords",
      label: "Keywords",
      type: "text",
    },
    {
      name: "postImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "published",
          label: "Published",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: {
        position: "sidebar",
      },
    },
  ],
}

export default Posts
