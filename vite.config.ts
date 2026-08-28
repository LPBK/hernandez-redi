import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function netlifyDevApiPlugin(): Plugin {
  return {
    name: 'netlify-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/')) {
          return next();
        }

        try {
          const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
          const pathname = url.pathname;

          let handler: ((request: Request) => Promise<Response>) | null = null;

          if (pathname === '/api/login') {
            const mod = await import('./netlify/functions/login');
            handler = mod.default;
          } else if (pathname === '/api/properties') {
            const mod = await import('./netlify/functions/properties');
            handler = mod.default;
          } else if (pathname === '/api/projects') {
            const mod = await import('./netlify/functions/projects');
            handler = mod.default;
          } else if (pathname === '/api/send-email') {
            const mod = await import('./netlify/functions/send-email');
            handler = mod.default;
          }

          if (!handler) {
            return next();
          }

          let body: string | undefined;
          if (req.method !== 'GET' && req.method !== 'HEAD') {
            const chunks: Buffer[] = [];
            for await (const chunk of req) {
              chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
            }
            body = Buffer.concat(chunks).toString('utf8');
          }

          const webRequest = new Request(url.toString(), {
            method: req.method,
            headers: req.headers as any,
            body: body ? body : undefined,
          });

          const webResponse = await handler(webRequest);
          res.statusCode = webResponse.status;
          webResponse.headers.forEach((val, key) => {
            res.setHeader(key, val);
          });
          const resBody = await webResponse.text();
          res.end(resBody);
        } catch (err: any) {
          console.error('Error in local API middleware:', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: err.message || 'Internal Server Error' }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (env.DATABASE_URL) process.env.DATABASE_URL = env.DATABASE_URL;
  if (env.RESEND_API_KEY) process.env.RESEND_API_KEY = env.RESEND_API_KEY;

  return {
    plugins: [react(), tailwindcss(), netlifyDevApiPlugin()],
    server: {
      hmr: {
        overlay: false,
      },
    },
  };
});
