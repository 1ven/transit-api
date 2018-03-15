import Boom from "boom";
import { isEmpty } from "ramda";

export default async (ctx, next) => {
  if (!ctx.session || !ctx.session.userId) {
    throw Boom.forbidden();
  }

  await next();
};
