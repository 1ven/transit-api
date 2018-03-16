import Router from "koa-router";
import users from "./users";
import auth from "./auth";

export default new Router({ prefix: "/api/v1" })
  .use(users.routes(), auth.routes())
  .routes();
