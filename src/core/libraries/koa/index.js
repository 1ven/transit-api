import fs from "fs";
import path from "path";
import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import session from "koa-session";
import createSessionStore from "koa-session-knex-store";
import { validation } from "core/conceptions/models/middlewares";
import * as swagger from "core/libraries/swagger";
import * as swaggerMiddlewares from "core/libraries/swagger/middlewares";
import * as middlewares from "./middlewares";

export const initServer = async (routes, db) => {
  const app = new Koa();
  const swaggerSpec = await swagger.loadSpec();

  // TODO: get from env
  app.keys = ["my super secret"];
  app.context.db = db;

  app.use(
    session(
      {
        key: "session_id",
        maxAge: 24 * 60 * 60 * 1000,
        store: createSessionStore(db, {
          createtable: true
        })
      },
      app
    )
  );
  app.use(middlewares.boom);
  app.use(validation);
  app.use(bodyParser());
  app.use(
    cors({
      allowHeaders: ["Content-type", "Accept"],
      credentials: true
    })
  );
  app.use(routes);
  app.use(swaggerMiddlewares.documentation(swaggerSpec));

  app.listen(8080, () => {
    console.log("HTTP server is listening");
  });

  return app;
};
