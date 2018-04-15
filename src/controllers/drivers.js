import Router from "koa-router";
import { authenticated, validate } from "core/libraries/koa/middlewares";
import * as driverModel from "models/roles/driver";
import * as driverValidations from "models/roles/driver/validations";

export default new Router({ prefix: "/drivers" })
  .post("/", authenticated, validate(driverValidations.create), async ctx => {
    ctx.response.body = await driverModel.create(
      ctx.request.body,
      ctx.session.userId,
      ctx.db
    );
  })
  .get("/", authenticated, async ctx => {
    ctx.response.body = await driverModel.list(ctx.db);
  });
