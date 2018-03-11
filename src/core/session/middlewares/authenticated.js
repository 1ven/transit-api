import Boom from "boom";

export default async (ctx, next) => {
  if (!ctx.session) {
    throw Boom.forbidden();
  }

  await next();
};
