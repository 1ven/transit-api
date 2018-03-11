import Router from "koa-router";
import { key } from "core/session";
import * as authentication from "models/user/authentication";

export default new Router({ prefix: "/auth" })
  .post("/local", async ctx => {
    // TODO: Investigate, is that conceptually correct to call multiple model functions in controller.
    const user = await authentication.local(ctx.request.body, ctx.db);

    ctx.session.userId = user.id;
    ctx.response.body = user;
  })
  .routes();
