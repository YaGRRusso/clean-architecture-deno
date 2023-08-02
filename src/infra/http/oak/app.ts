import { Application } from "oak";
import { oakCors } from "cors";
import classroomRoutes from "@infra/http/oak/routes/classrooms.ts";
import testRoutes from "@infra/http/oak/routes/test.ts";

export const server = new Application();

server.use(oakCors());
server.use(testRoutes.routes());
server.use(testRoutes.allowedMethods());
server.use(classroomRoutes.routes());
server.use(classroomRoutes.allowedMethods());

server.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = "Not found";
});

export default (PORT: number | string, HOST: string) => {
  server.listen({ port: Number(PORT), hostname: HOST });
};
