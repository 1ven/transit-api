export default async ctx => {
  ctx.session = null;
  ctx.status = 204;
};
