import { createUserController } from "@adapters/controllers/user.controller.ts";
import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
const router = new Router();

router.post("/users", createUserController);

export default router;
