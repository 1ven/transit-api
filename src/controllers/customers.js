import Router from "koa-router";
import { authenticated, validate } from "core/libraries/koa/middlewares";
import * as customerModel from "models/roles/customer";
import * as customerValidations from "models/roles/customer/validations";

export default new Router({ prefix: "/customers" }).post(
  "/",
  authenticated,
  validate(customerValidations.create),
  async ctx => {
    ctx.response.body = await customerModel.create(
      ctx.request.body,
      ctx.session.userId,
      ctx.db
    );
  }
);
