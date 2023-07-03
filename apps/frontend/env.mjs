import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // Server variables
    // Whether to analyze the bundle sizes
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    // Domain of the CMS API
    DOMAIN: z.string().default("localhost"),
  },
  client: {
    // Client variables
    // URL of the CMS API
    NEXT_PUBLIC_BACKEND_URL: z.string().url().default("http://localhost:3000")
  },
  // Assign runtime variables from process.env
  runtimeEnv: process.env,
})
