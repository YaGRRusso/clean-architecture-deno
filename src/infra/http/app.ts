import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import helloRouter from "@infra/http/routes/v1/hello.ts";
import userRouter from "@infra/http/routes/v1/user.ts";
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    data: {
      app: "Deno API",
      version: "1.0.0",
      support: "yagrrusso@gmail.com",
    },
    error: null,
  };
});

router.use(helloRouter.routes());
router.use(helloRouter.allowedMethods());

router.use(userRouter.routes());
router.use(userRouter.allowedMethods());

export default router;
