import oak from "@infra/http/oak/app.ts";
import hono from "@infra/http/hono/app.ts";

const HOST = Deno.env.get("HOST") ?? "localhost";
const PORT = Deno.env.get("PORT") ?? "8080";

// oak(PORT, HOST);
hono(PORT, HOST);
