import sway from "sway";
import * as controllers from "_controllers";

// TODO: implement passing params to the controller

// TODO: store all routes in nested for in order to find needed route definition faster on every request.
export default async swaggerSpec => {
  const api = await sway.create({ definition: swaggerSpec });
  // TODO: get from env?
  const basePath = "/v1";
  const controllerKey = "x-swagger-router-controller";

  const paths = api.getPaths();

  return async ctx => {
    const method = ctx.request.method.toLowerCase();

    for (let path of paths) {
      const matched = path.regexp.exec(ctx.url.substr(basePath.length));
      if (matched && path[method]) {
        const { operationId } = path[method];
        const controllerName = path[controllerKey];

        // TODO: should we throw all those errors, or just send 501 in that case?
        if (!operationId) {
          throw new Error("operationId is not found for given method");
        }

        if (!controllerName) {
          throw new Error("Controller name is not found for given path");
        }

        const controller = controllers[controllerName];

        if (!controller) {
          throw new Error("Controller function is not found");
        }

        await controller[operationId](ctx);
        return;
      }
    }

    ctx.response.status = 404;
  };
};
