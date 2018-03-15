import Router from "koa-router";
import signInLocal from "./signInLocal";
import signOut from "./signOut";

export default new Router({ prefix: "/auth" })
  .post("/sign-in/local", signInLocal)
  .post("/sign-out", signOut)
  .routes();
