import { key } from "../";
import {} from "../index";

export default async (ctx, next) => {
  ctx.cookies.set(key, ctx.session, { httpOnly: true });
  await next();
};
