import * as errors from "core/models/errors";

export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof errors.InvalidRequest) {
      ctx.status = 400;
      ctx.body = err.getContent();
      return;
    }
    throw err;
  }
};
