import "babel-polyfill";
import * as http from "core/http";
import * as database from "core/database";
import signUp from "./models/user/sign-up";

const app = http.initServer();
const db = database.connection;

app.use(async ctx => {
  ctx.body = "Hello World";
});

signUp({ email: "test" }, db).catch(err => console.log(err.getContent()));
