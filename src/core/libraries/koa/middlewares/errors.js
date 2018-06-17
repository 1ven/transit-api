import Boom from "boom";
import { message } from "core/conceptions/http";

export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    /**
     * Boom error handling
     */
    if (Boom.isBoom(err)) {
      const status = err.output.statusCode;

      if (status.toString()[0] === "4") {
        ctx.response.body = {
          ...message(err.message)
        };
        ctx.response.status = status;
      } else {
        ctx.throw(status);
      }
      return;
    }

    /**
     * Model error handling
     */

    throw err;
  }
};
