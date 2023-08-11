import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";


interface Environment {
  NODE_ENV?: string;
}

const handleRequest = createPagesFunctionHandler<Environment>({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext(context) {
    return {}
  },
});

export async function onRequest(
  context: EventContext<Environment, "path", never>
) {
  const response = await handleRequest(context);

  return response;
}
