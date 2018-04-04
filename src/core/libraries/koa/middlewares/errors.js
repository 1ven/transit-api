import Boom from "boom";
import { message, fields } from "core/conceptions/http";
import * as validation from "core/conceptions/models/validation";

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
     * Model validation error handling
     */
    if (err instanceof validation.ValidationError) {
      ctx.response.body = {
        message: "Validation failed",
        ...fields(err.getFields())
      };
      ctx.response.status = 422;
      return;
    }

    throw err;
  }
};
