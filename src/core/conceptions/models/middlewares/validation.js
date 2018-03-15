import Boom from "boom";
import * as validation from "../validation";

export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof validation.ValidationError) {
      throw Boom.badRequest(null, err.getFields());
    }
    throw err;
  }
};
