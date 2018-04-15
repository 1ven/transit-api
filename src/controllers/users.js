import Router from "koa-router";
import { validate } from "core/libraries/koa/middlewares";
import { message } from "core/conceptions/http";
import * as userModel from "models/account/user";
import * as userValidations from "models/account/user/validations";

export default new Router({ prefix: "/users" }).post(
  "/",
  validate(userValidations.signUp),
  async ctx => {
    const user = await userModel.signUp(ctx.request.body, ctx.db);
    ctx.session.userId = user.id;
    ctx.response.body = user;
  }
);
