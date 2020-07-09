import { Client } from "https://deno.land/x/mysql/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";

const app= new Application();

const env = config();
const HOST = env.APP_HOST || "http://localhost";
const PORT = +env.APP_PORT || 4000;

console.log(HOST, PORT);

const router = new Router();

router.get("/", (ctx: RouterContext) => {
  console.log(ctx.response.body = "Hello World..!!");
});

app.use(router.routes());

console.log(`server is started and listening at port :${PORT}`);

await app.listen({port:PORT});

