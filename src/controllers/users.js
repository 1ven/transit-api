import Router from "koa-router";
import { authenticated } from "core/libraries/koa/middlewares";
import { message } from "core/conceptions/http";
import * as model from "models/user";

export default new Router({ prefix: "/users" }).post("/", async ctx => {
  const user = await model.signUp(ctx.request.body, ctx.db);
  ctx.session.userId = user.id;
  ctx.response.body = user;
});
