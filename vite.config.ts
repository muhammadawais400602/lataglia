import { existsSync } from 'node:fs';
import path from 'node:path';
import { defineConfig, loadEnv, type Plugin, type ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';

// Runs the Vercel functions in /api inside `vite dev` / `vite preview`, so the admin works locally.
function localApi(): Plugin {
  const attach = (server: ViteDevServer | { middlewares: ViteDevServer['middlewares'] }, load: (file: string) => Promise<Record<string, unknown>>) => {
    server.middlewares.use(async (req, res, next) => {
      const url = new URL(req.url ?? '/', 'http://localhost');
      if (!url.pathname.startsWith('/api/')) return next();
      const file = path.resolve('api', `${url.pathname.slice(5).replace(/\.\./g, '')}.ts`);
      if (!existsSync(file) || path.basename(file).startsWith('_')) {
        res.statusCode = 404;
        return res.end('{"error":"Not found"}');
      }
      const handler = (await load(file))[req.method ?? 'GET'];
      if (typeof handler !== 'function') {
        res.statusCode = 405;
        return res.end('{"error":"Method not allowed"}');
      }
      const chunks: Buffer[] = [];
      for await (const c of req) chunks.push(c as Buffer);
      const headers = new Headers();
      for (const [k, v] of Object.entries(req.headers)) if (typeof v === 'string') headers.set(k, v);
      const body = chunks.length ? Buffer.concat(chunks) : undefined;
      const response: Response = await handler(new Request(url, { method: req.method, headers, body }));
      res.statusCode = response.status;
      response.headers.forEach((v, k) => res.setHeader(k, v));
      res.end(Buffer.from(await response.arrayBuffer()));
    });
  };
  return {
    name: 'local-api',
    configureServer(server) {
      attach(server, (f) => server.ssrLoadModule(f));
    },
    async configurePreviewServer(server) {
      const { createServer } = await import('vite');
      const loader = await createServer({ server: { middlewareMode: true }, appType: 'custom', configFile: false });
      attach(server, (f) => loader.ssrLoadModule(f));
    },
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
  return {
    plugins: [react(), localApi()],
    server: { port: 5173, host: true },
  };
});
