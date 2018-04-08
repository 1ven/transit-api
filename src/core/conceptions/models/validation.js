import * as yup from "yup";
import { assocPath } from "ramda";

export class ValidationError {
  constructor(errors) {
    this.errors = errors;
  }

  getFields() {
    return this.errors.reduce(
      (acc, item) => assocPath(item.path.split("."), item.message, acc),
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
