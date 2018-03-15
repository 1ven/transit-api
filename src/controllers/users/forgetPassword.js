import makeResetToken from "models/user/makeResetToken";

export default async ctx => {
  await makeResetToken(ctx.request.body.email, ctx.db);
  ctx.response.status = 202;
};
