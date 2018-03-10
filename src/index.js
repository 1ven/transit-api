import "babel-polyfill";
import * as http from "core/http";
import * as database from "core/database";
import routes from "./controllers";

const app = http.initServer(routes, database.connection);
