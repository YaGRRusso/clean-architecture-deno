import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import router from '@routes/routes.ts'

const HOST = Deno.env.get("HOST") ?? 'localhost'
const PORT = Deno.env.get("PORT") ?? '8080'

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Deno is running in ${HOST}:${PORT}`)
await app.listen( { hostname: HOST, port: Number(PORT) } )