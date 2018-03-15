import koaCompose from "koa-compose";
import { authenticated } from "core/libraries/koa/middlewares";
import readById from "models/user/readById";

export default koaCompose([
  authenticated,
  async ctx => {
    ctx.response.body = await readById(ctx.session.userId, ctx.db);
  }
]);
