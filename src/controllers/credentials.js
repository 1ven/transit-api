import Router from "koa-router";
import { authenticated } from "core/libraries/koa/middlewares";
import { message } from "core/conceptions/http";
import * as resetTokenModel from "models/account/reset-token";
import * as userModel from "models/account/user";

export default new Router({ prefix: "/credentials" })
  .post("/reset", async ctx => {
    await resetTokenModel.createToken(ctx.request.body.email, ctx.db);
    ctx.response.status = 202;
  })
  .post("/change", async ctx => {
    const { token, password } = ctx.request.body;
    await userModel.changePassword(token, password, ctx.db);
    ctx.response.status = 200;
    ctx.response.body = message("Password has been changed successfully");
  });
