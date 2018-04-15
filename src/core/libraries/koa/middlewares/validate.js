import * as yup from "yup";
import { assocPath } from "ramda";
import { fields } from "core/conceptions/http";

export default createSchema => async (ctx, next) => {
  try {
    const schema = createSchema(ctx.db);

    await schema.validate(ctx.request.body, {
      strict: true,
      abortEarly: false
    });

    await next();
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      ctx.response.body = {
        message: "Validation failed",
        ...fields(getFields(err.inner))
      };
      ctx.response.status = 422;
      return;
    }

    throw err;
  }
};

const getFields = errors =>
  errors.reduce(
    (acc, item) => assocPath(item.path.split("."), item.message, acc),
    {}
  );
