import resetPassword from "models/user/resetPassword";

export default async ctx => {
  const { token, password } = ctx.request.body;
  await resetPassword(token, password, ctx.db);
  ctx.response.status = 200;
  ctx.response.body = "Password has been changed successfully";
};
