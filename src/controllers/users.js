import Router from "koa-router";
import * as model from "models/user";

export default new Router({ prefix: "/users" })
  .post("/", async ctx => {
    ctx.response.body = await model.signUp(ctx.request.body, ctx._.db);
  })
  .get("/", ctx => {
    ctx.body = "get hello";
  })
  .routes();
