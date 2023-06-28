import express from 'express';
import payload from 'payload';
import { createDocument } from "payload-openapi"
import { writeFileSync } from "fs"
import yaml from "yaml"

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)

      const openapiDocument = await createDocument(payload.config, {});
      writeFileSync("./openapi.yaml", yaml.stringify(openapiDocument));
    },
  })

  // Add your own express routes here

  app.listen(3000);
}

start();
