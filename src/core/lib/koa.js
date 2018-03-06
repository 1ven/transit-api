import Koa from "koa";

export const initServer = () => {
  const app = new Koa();

  app.listen(3000, () => {
    console.log("HTTP server is listening");
  });

  return app;
};
