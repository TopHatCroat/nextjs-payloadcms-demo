import { createDocument } from "payload-openapi";
import payloadConfig from "./payload.config";

const openapiDocument = createDocument(payloadConfig, {
  /* see options section */
});