import Router from "koa-router";
import users from "./users";
import auth from "./auth";

export default new Router({ prefix: "/v1" }).use(users, auth).routes();
