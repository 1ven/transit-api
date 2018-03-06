import "babel-polyfill";
import { koa } from "core/lib";

const app = koa.initServer();

app.use(async ctx => {
  ctx.body = "Hello World";
});

console.log(process.env.PROD_ENV);
