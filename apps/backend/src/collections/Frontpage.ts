import { GlobalConfig } from "payload/types"

export const Frontpage: GlobalConfig = {
  slug: "frontpage",
  fields: [
    {
      name: "about",
      type: "text",
    },
    {
      name: "aboutImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "content",
          type: "text",
          required: true,
        },
      ]
    }
  ]
}