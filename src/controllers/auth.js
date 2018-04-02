import Router from "koa-router";
import * as authentication from "models/user/authentication";

export default new Router({ prefix: "/auth" })
  .post("/local/sign-in", async ctx => {
    const user = await authentication.local(ctx.request.body, ctx.db);

    ctx.session.userId = user.id;
    ctx.response.body = user;
  })
  .post("/sign-out", ctx => {
    ctx.session = null;
    ctx.status = 204;
  });
