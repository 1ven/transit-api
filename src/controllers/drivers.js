import Router from "koa-router";
import { authenticated } from "core/libraries/koa/middlewares";
import * as driver from "models/roles/driver";

export default new Router({ prefix: "/drivers" })
  .post("/", authenticated, async ctx => {
    ctx.response.body = await driver.create(
      ctx.request.body,
      ctx.session.userId,
      ctx.db
    );
  })
  .get("/", authenticated, async ctx => {
    ctx.response.body = await driver.list(ctx.db);
  });
