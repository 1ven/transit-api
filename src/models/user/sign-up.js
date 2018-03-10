import bcrypt from "bcrypt";
import * as yup from "yup";
import { pick } from "ramda";
import * as errors from "core/models/errors";
import * as validation from "core/models/validation";

export default async (props, db) => {
  try {
    const { email, password } = await validation.validate(
      props,
      createSchema(db)
    );

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

const checkEmailUniqueness = db => async email =>
  !(await db
    .select("id")
    .from("users")
    .where("email", email))[0];

const createSchema = db =>
  yup.object().shape({
    email: yup
      .string()
      .email("Incorrect email format")
      .test("unique-email", "Email already exists", checkEmailUniqueness(db))
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be at least 8 digits")
      .required("Password is required"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords are not matching")
      .required("Password confirmation is required")
  });
