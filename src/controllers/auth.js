import Router from "koa-router";
import * as authentication from "models/user/authentication";

export default new Router({ prefix: "/auth" })
  .post("/local", async ctx => {
    ctx.response.body = await authentication.local(ctx.request.body, ctx._.db);
  })
  .routes();
