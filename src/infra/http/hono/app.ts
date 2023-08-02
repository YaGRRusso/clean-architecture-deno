import { Hono } from "hono";
import testRoutes from "@infra/http/hono/routes/test.ts";
const server = new Hono();

server.route("/", testRoutes);

server.notFound((ctx) => {
  return ctx.text("Not Found", 404);
});

server.showRoutes();

export const startHono = (PORT: number | string, HOST: string) => {
  Deno.serve({ port: Number(PORT), hostname: HOST }, server.fetch);
};

export default server;
