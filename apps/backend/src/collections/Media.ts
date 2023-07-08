import path from "path"
import type { CollectionConfig } from "payload/types"

const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/media",
    mimeTypes: ["image/*"],
    staticDir: path.resolve(__dirname, "../../media"),
    // Specify the size name that you'd like to use as admin thumbnail
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: "center",
        name: "thumbnail",
      },
      {
        width: 900,
        height: 450,
        crop: "center",
        name: "sixteenByNineMedium",
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
}

export default Media
