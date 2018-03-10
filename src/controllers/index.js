import Router from "koa-router";
import users from "./users";

export default new Router({ prefix: "/v1" }).use(users).routes();
