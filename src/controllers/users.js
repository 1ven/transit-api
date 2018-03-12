import Router from "koa-router";
import { authenticated } from "core/http/middlewares";
import * as model from "models/user";

export default new Router({ prefix: "/users" })
  .post("/", async ctx => {
    ctx.response.body = await model.signUp(ctx.request.body, ctx.db);
  })
  // .post("/password-reset" async ctx => {
  //   ctx.response.status = 202;
  // })
  // .post("/password-reset/confirmation")
  .get("/", authenticated, async ctx => {
    ctx.response.body = await model.readById(ctx.session.userId, ctx.db);
  })
  .routes();
