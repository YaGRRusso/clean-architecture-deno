import server from "@infra/http/app.ts";

const HOST = Deno.env.get("HOST") ?? "localhost";
const PORT = Deno.env.get("PORT") ?? "8080";

console.log(`Deno is running in ${HOST}:${PORT}...`);
await server.listen({ hostname: HOST, port: Number(PORT) });
