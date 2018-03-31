import Router from "koa-router";
import user from "./user";
import auth from "./auth";

export default new Router({ prefix: "/v1" })
  .use(user.routes(), auth.routes())
  .routes();
