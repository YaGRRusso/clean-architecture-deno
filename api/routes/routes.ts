import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";

const router = new Router()

router.get("/", ctx => {
    ctx.response.status = 200
    ctx.response.body = 'Hello World'
})

router.get("/:name", ctx => {
    ctx.response.status = 200
    ctx.response.body = `Hello ${ctx.params.name}`
})

export default router