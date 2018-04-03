import Boom from "boom";
import * as yup from "yup";
import * as user from "models/user";
import { pick } from "ramda";
import { validate } from "core/conceptions/models/validation";
import readByUserId from "./readByUserId";

export default async (props, userId, db) => {
  const { role } = await user.readById(userId, db);

  if (role !== "customer") {
    throw Boom.forbidden("User should have customer role");
  }

  if (await readByUserId(userId, db)) {
    throw Boom.conflict("User is already having a customer");
  }

  const { first_name, last_name } = await validate(props, createSchema(db));

  const customer = (await db
    .insert({ first_name, last_name, user_id: userId })
    .into("customers")
    .returning("*"))[0];

  return pick(["id", "first_name", "last_name"], customer);
};

const createSchema = db =>
  yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required")
  });
