import Boom from "boom";
import * as yup from "yup";
import * as userModel from "models/account/user";
import { pick } from "ramda";
import readByUserId from "./readByUserId";

export default async ({ first_name, last_name }, userId, db) => {
  const { role } = await userModel.readById(userId, db);

  if (role !== "customer") {
    throw Boom.forbidden("User should have a customer role");
  }

  if (await readByUserId(userId, db)) {
    throw Boom.conflict("User is already having a customer");
  }

  const customer = (await db
    .insert({ first_name, last_name, user_id: userId })
    .into("customers")
    .returning("*"))[0];

  return pick(["id", "first_name", "last_name"], customer);
};
