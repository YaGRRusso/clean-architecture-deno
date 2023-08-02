import { Router } from "oak";
import { Body, Params, Queries } from "@core/entities/logic/http.entity.ts";
import { getSearchParams } from "@utils/http.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    name: "Clean Arch Deno",
    version: "1.0.0",
    status: "Running",
    engine: "Oak",
  };
});

router.get("/test", (ctx) => {
  const queries: Queries = getSearchParams(ctx.request.url);
  console.log(queries);

  ctx.response.status = 200;
  ctx.response.body = queries;
});

router.get("/test/:slug", (ctx) => {
  const params: Params = ctx.params;
  console.log(params);

  ctx.response.status = 200;
  ctx.response.body = params;
});

router.post("/test", async (ctx) => {
  const body: Body = await (ctx.request.body({ type: "form-data" }).value
    .read()) as unknown as Body;
  console.log(body.fields);
  console.log(body.files);

  ctx.response.status = 200;
  ctx.response.body = body;
});

export default router;
