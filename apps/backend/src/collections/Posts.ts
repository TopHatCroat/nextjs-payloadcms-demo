import { CollectionConfig } from "payload/types"

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    defaultColumns: ["title", "author", "category", "tags", "status"],
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "postMeta",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          minLength: 20,
          maxLength: 100,
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
      ],
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Post Media",
          fields: [
            {
              name: "postImage",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          label: "Post Layout",
          fields: [
            {
              name: "content",
              type: "richText"
            },
          ]
        }
      ]
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
      }
    },
    {
      name: "publishedDate",
      type: "date",
      admin: {
        position: "sidebar",
      }
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: {
        position: "sidebar",
      }
    }
  ],
}

export default Posts
