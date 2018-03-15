import Boom from "boom";

export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (Boom.isBoom(err)) {
      const status = err.output.statusCode;

      if (status.toString()[0] === "4") {
        ctx.response.body = err.data || err.message;
        ctx.response.status = status;
      } else {
        ctx.throw(status);
      }
      return;
    }
    throw err;
  }
};
