import signUp from "models/user/signUp";

export default async ctx => {
  ctx.response.body = await signUp(ctx.request.body, ctx.db);
};
