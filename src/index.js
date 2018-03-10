import "babel-polyfill";
import * as http from "core/http";
import * as database from "core/database";
import passportLocal from "passport-local";
import signUp from "./models/user/sign-up";

const app = http.initServer();
const db = database.connection;

app.use(async ctx => {
  ctx.body = "Hello World";
});

console.log(passportLocal);

signUp({ email: "test" }, db).catch(err => console.log(err.getContent()));
