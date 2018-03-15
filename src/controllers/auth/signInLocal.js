import local from "models/user/authentication/local";

export default async ctx => {
  const user = await local(ctx.request.body, ctx.db);

  ctx.session.userId = user.id;
  ctx.response.body = user;
};
