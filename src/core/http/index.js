import Koa from "koa";
import bodyParser from "koa-bodyparser";
import * as middlewares from "./middlewares";

export const initServer = (routes, db) => {
  const app = new Koa();

  app.use(middlewares.boom);
  app.use(bodyParser());
  app.use(routes);

  app.context._ = {
    db
  };

  app.listen(3000, () => {
    console.log("HTTP server is listening");
  });

  return app;
};
