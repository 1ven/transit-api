import bcrypt from "bcrypt";
import { pick } from "ramda";
import * as yup from "yup";
import { validate } from "core/conceptions/models/validation";

export default async (props, db) => {
  const { role, email, password } = await validate(props, createSchema(db));

  const hash = await bcrypt.hash(password, 12);
  const user = (await db
    .insert({ role, email, hash })
    .into("users")
    .returning("*"))[0];

  return pick(["id", "email", "role"], user);
};

const checkEmailUniqueness = db => async email =>
  !(await db
    .select("id")
    .from("users")
    /**
     * Using `null` as knex will throw an error if email will be undefined.
     */
    .where("email", email || null))[0];

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
      .required("Password confirmation is required"),
    role: yup
      .string()
      .oneOf(["driver", "customer"], "Role should be either driver or customer")
      .required()
  });
