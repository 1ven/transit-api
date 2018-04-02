import Router from "koa-router";
import { authenticated } from "core/libraries/koa/middlewares";
import { message } from "core/conceptions/http";
import * as model from "models/user";

export default new Router({ prefix: "/self" }).get(
  "/",
  authenticated,
  async ctx => {
    ctx.response.body = await model.readById(ctx.session.userId, ctx.db);
  }
);
