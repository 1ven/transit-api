import * as session from "models/user/session";
import { key } from "../";

export default async (ctx, next) => {
  const signedSessionId = ctx.cookies.get(key);

  ctx.session = signedSessionId
    ? await session.readSession(signedSessionId, ctx.db)
    : null;

  await next();
};
