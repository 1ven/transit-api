import Koa from "koa";
import bodyParser from "koa-bodyparser";
import * as middlewares from "./middlewares";
import * as sessionMiddlewares from "../session/middlewares";

export const initServer = (routes, db) => {
  const app = new Koa();

  app.use(middlewares.boom);
  app.use(sessionMiddlewares.session);
  app.use(bodyParser());
  app.use(routes);

  app.context.db = db;

  app.listen(3000, () => {
    console.log("HTTP server is listening");
  });

  return app;
};
