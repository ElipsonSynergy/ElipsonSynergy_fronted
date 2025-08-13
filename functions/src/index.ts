import express from 'express';
import { onRequest } from 'firebase-functions/v2/https';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { RequestHandler } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  '/assets',
  express.static(path.join(__dirname, 'dist/client/assets'), {
    maxAge: '1y',
    immutable: true,
  }),
);

// const entryPath = path.join(__dirname, 'dist/server/entry.mjs');
// const { handler: astroMiddleware } = await import(entryPath);

const entryUrl = new URL('./server/entry.mjs', import.meta.url);
const { handler: astroMiddleware } =
  (await import(entryUrl.href)) as { handler: RequestHandler };
app.use(astroMiddleware as any);

export const ssr = onRequest({ region: 'us-central1' }, app);
