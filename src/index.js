import "babel-polyfill";
import * as koa from "core/libraries/koa";
import * as knex from "core/libraries/knex";
import routes from "./controllers";

// Use function from `bootstrap`
const app = koa.initServer(routes, knex.connection);
