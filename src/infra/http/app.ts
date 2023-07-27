import { Application } from "oak";
import { oakCors } from "cors";
import classroomRoutes from "@infra/http/routes/classroom.ts";
import testRoutes from "@infra/http/routes/test.ts";

const server = new Application();

server.use(oakCors());
server.use(testRoutes.routes());
server.use(testRoutes.allowedMethods());
server.use(classroomRoutes.routes());
server.use(classroomRoutes.allowedMethods());

server.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = "Not found";
});

export default server;
