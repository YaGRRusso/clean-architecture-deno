import { Hono } from "hono";
const router = new Hono();

router.get("/", (ctx) => {
  return ctx.json({
    name: "Clean Arch Deno",
    version: "1.0.0",
    status: "Running",
    engine: "Hono",
  }, 200);
});

router.get("/test", (ctx) => {
  const queries = ctx.req.query();
  console.log(queries);

  return ctx.json(queries, 200);
});

router.get("/test/:slug", (ctx) => {
  const params = ctx.req.param();
  console.log(params);

  return ctx.json(params, 200);
});

router.post("/test", async (ctx) => {
  const body = await ctx.req.parseBody();
  console.log(body);

  return ctx.json(body, 200);
});

export default router;
