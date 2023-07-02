import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    DOMAIN: z.string().default("127.0.0.1"),
  },
  client: {
    NEXT_PUBLIC_BACKEND_URL: z.string().url().default("http://127.0.0.1:3000")
  },
  runtimeEnv: process.env,
})
