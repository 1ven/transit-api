import "babel-polyfill";
import { koa } from "core/lib";
import db from "core/database";

const app = koa.initServer();

app.use(async ctx => {
  ctx.body = "Hello World";
});

db
  .select("*")
  .from("users")
  .then(x => console.log(x));
