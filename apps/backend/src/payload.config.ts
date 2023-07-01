import { buildConfig } from "payload/config"
import path from "path"
import { swagger } from "payload-swagger"

import Posts from "./collections/Posts"
import Users from "./collections/Users"
import Media from "./collections/Media"
import { seed } from "./seed"

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Posts, Users, Media],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    swagger()
  ],
  onInit: async (payload) => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED) {
      await seed(payload)
    }
  }
})
