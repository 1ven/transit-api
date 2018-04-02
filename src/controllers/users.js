import Router from "koa-router";
import { authenticated } from "core/libraries/koa/middlewares";
import { message } from "core/conceptions/http";
import * as model from "models/user";

export default new Router({ prefix: "/users" }).post("/", async ctx => {
  ctx.response.body = await model.signUp(ctx.request.body, ctx.db);
});
