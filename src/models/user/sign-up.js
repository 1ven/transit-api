import bcrypt from "bcrypt";
import * as yup from "yup";
import { pick } from "ramda";
import * as errors from "core/models/errors";
import * as validation from "core/models/validation";

export default async (props, db) => {
  try {
    const { email, password } = await validation.validate(props, schema);
    console.log(email, password);
    const hash = await bcrypt.hash(password, 12);
    const user = (await db
      .insert({ email, hash })
      .into("users")
      .returning("*"))[0];

    return pick(["id", "email"], user);
  } catch (err) {
    if (err instanceof validation.ValidationError) {
      throw new errors.InvalidRequest(err.getFields());
    }
    throw err;
  }
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(10)
    .required()
});
