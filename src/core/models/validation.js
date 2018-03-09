import * as yup from "yup";
import { append, over, or, lensPath, compose } from "ramda";

export class ValidationError {
  constructor(errors) {
    this.errors = errors;
  }

  getFields() {
    return this.errors.reduce(
      (acc, error) =>
        over(
          lensPath(error.path.split(".")),
          compose(append(error.message), or([])),
          acc
        ),
      {}
    );
  }
}

export const validate = async (data, schema) => {
  try {
    return await schema.validate(data, {
      strict: true,
      abortEarly: false
    });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      throw new ValidationError(err.inner);
    }

    throw err;
  }
};
