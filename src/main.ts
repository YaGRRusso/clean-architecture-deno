import { startOak } from "@infra/http/oak/app.ts";
import { startHono } from "@infra/http/hono/app.ts";

const HOST = Deno.env.get("HOST") ?? "localhost";
const PORT = Deno.env.get("PORT") ?? "8080";

// startOak(PORT, HOST);
startHono(PORT, HOST);
