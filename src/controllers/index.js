import Router from "koa-router";
import auth from "./auth";
import credentials from "./credentials";
import self from "./self";
import users from "./users";

export default new Router({ prefix: "/v1" })
  .use(auth.routes(), credentials.routes(), self.routes(), users.routes())
  .routes();
