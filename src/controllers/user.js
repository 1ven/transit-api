import Router from "koa-router";
import { authenticated } from "core/libraries/koa/middlewares";
import * as model from "models/user";

export default new Router({ prefix: "/user" })
  .get("/", authenticated, async ctx => {
    ctx.response.body = await model.readById(ctx.session.userId, ctx.db);
  })
  .post("/", async ctx => {
    ctx.response.body = await model.signUp(ctx.request.body, ctx.db);
  })
  .post("/password-reset", async ctx => {
    await model.makeResetToken(ctx.request.body.email, ctx.db);
    ctx.response.status = 202;
  })
  .post("/password-reset/confirmation", async ctx => {
    const { token, password } = ctx.request.body;
    await model.resetPassword(token, password, ctx.db);
    ctx.response.status = 200;
    ctx.response.body = "Password has been changed successfully";
  });
