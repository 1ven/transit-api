import Router from "koa-router";
import { authenticated } from "core/libraries/koa/middlewares";
import * as userModel from "models/account/user";

export default new Router({ prefix: "/self" }).get(
  "/",
  authenticated,
  async ctx => {
    ctx.response.body = await userModel.readById(ctx.session.userId, ctx.db);
  }
);
