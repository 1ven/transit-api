import Router from "koa-router";
import getUser from "./getUser";
import setupPassword from "./setupPassword";
import forgetPassword from "./forgetPassword";
import signUp from "./signUp";

export default new Router({ prefix: "/users" })
  .post("/", signUp)
  .get("/", getUser)
  .post("/password-reset", forgetPassword)
  .post("/password-reset/confirmation", setupPassword)
  .routes();
