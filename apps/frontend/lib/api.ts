import { Configuration } from "api"
import { env } from "env.mjs"

/**
 * Get full Payload URL
 * @returns {string} Full Payload API URL
 */
export function getApiConfiguration(): Configuration {
  return new Configuration({
    basePath: `${env.NEXT_PUBLIC_BACKEND_URL}/api`
  })
}
