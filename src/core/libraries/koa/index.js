import Koa from "koa";
import bodyParser from "koa-bodyparser";
import session from "koa-session";
import createSessionStore from "koa-session-knex-store";
import * as middlewares from "./middlewares";
import { validation } from "core/conceptions/models/middlewares";

export const initServer = (routes, db) => {
  const app = new Koa();

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
  app.use(routes);

  app.listen(3000, () => {
    console.log("HTTP server is listening");
  });

  return app;
};
