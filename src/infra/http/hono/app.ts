import { Hono } from "hono";
import testRoutes from "@infra/http/hono/routes/test.ts";
import classroomsRoutes from "@infra/http/hono/routes/classrooms.ts";

export const server = new Hono();

server.get("/", (ctx) => {
  return ctx.json({
    name: "Clean Arch Deno",
    version: "1.0.0",
    status: "Running",
    engine: "Hono",
  }, 200);
});

server.route("/test", testRoutes);
server.route("/classrooms", classroomsRoutes);

server.notFound((ctx) => {
  return ctx.text("Not Found", 404);
});

server.showRoutes();

export default (PORT: number | string, HOST: string) => {
  Deno.serve({ port: Number(PORT), hostname: HOST }, server.fetch);
};
