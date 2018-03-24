import fs from "fs";
import path from "path";
import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import session from "koa-session";
import createSessionStore from "koa-session-knex-store";
import koaSwagger from "koa2-swagger-ui";
import yaml from "yaml-js";
import { validation } from "core/conceptions/models/middlewares";
import * as middlewares from "./middlewares";

export const initServer = (routes, db) => {
  const app = new Koa();
  const swaggerSpec = yaml.load(
    fs.readFileSync(path.resolve(__dirname, "../../../../swagger.yml"))
  );

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
  app.use(
    koaSwagger({
      title: "API Documentation",
      routePrefix: "/doc",
      hideTopbar: true,
      swaggerOptions: {
        spec: swaggerSpec,
        plugins: [
          () => ({
            statePlugins: {
              spec: {
                wrapSelectors: {
                  allowTryItOutFor: () => () => false
                }
              }
            }
          })
        ]
      }
    })
  );

  app.listen(3000, () => {
    console.log("HTTP server is listening");
  });

  return app;
};
