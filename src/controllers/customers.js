import Router from "koa-router";
import { authenticated } from "core/libraries/koa/middlewares";
import * as customer from "models/roles/customer";

export default new Router({ prefix: "/customers" }).post(
  "/",
  authenticated,
  async ctx => {
    ctx.response.body = await customer.create(
      ctx.request.body,
      ctx.session.userId,
      ctx.db
    );
  }
);
