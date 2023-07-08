import { CollectionConfig } from "payload/types"

const Profiles: CollectionConfig = {
  slug: "profiles",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
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
      name: "skills",
      type: "relationship",
      relationTo: "skills",
      hasMany: true,
    },
  ],
}

export default Profiles
