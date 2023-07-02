import { buildConfig } from "payload/config"
import path from "path"
import { swagger } from "payload-swagger"

import Posts from "./collections/Posts"
import Users from "./collections/Users"
import Media from "./collections/Media"
import { seed } from "./seed"
import Profiles from "./collections/Profiles"
import Skills from "./collections/Skills"

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Posts, Users, Media, Profiles, Skills],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    swagger()
  ]
})
