import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
const router = new Router();

router.get("/:name", (ctx) => {
  const name = ctx.params.name;

  ctx.response.status = 200;
  ctx.response.body = {
    data: `Hello ${name}`,
    error: null,
  };
});

export default router;
