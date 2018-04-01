import sway from "sway";

export default async swaggerSpec => {
  const api = await sway.create({ definition: swaggerSpec });

  console.log(api);

  return async (ctx, next) => {
    await next();
  };
};
