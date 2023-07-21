import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import router from "@infra/http/app.ts";

const HOST = Deno.env.get("HOST") ?? "localhost";
const PORT = Deno.env.get("PORT") ?? "8080";
const server = new Application();

server.use(router.routes());
server.use(router.allowedMethods());

server.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = {
    data: null,
    error: { code: "notFound", message: "Not found" },
  };
});

console.log(`Deno is running in ${HOST}:${PORT}...`);
await server.listen({ hostname: HOST, port: Number(PORT) });
