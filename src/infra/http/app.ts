import { Application } from "oak";
import { oakCors } from "cors";
import apiRoutes from "@infra/http/routes/api.ts";

const server = new Application();

server.use(oakCors());
server.use(apiRoutes.routes());
server.use(apiRoutes.allowedMethods());

server.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = "Not found";
});

export default server;
