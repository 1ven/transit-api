import bcrypt from "bcrypt";
import Boom from "boom";
import readByEmail from "../readByEmail";

export default async ({ email, password }, db) => {
  // TODO: implement validation?

  const { hash } = await db
    .first("*")
    .from("users")
    .where({ email });

  if (!await bcrypt.compare(password, hash)) {
    throw Boom.unauthorized("Sorry! Your email or password is invalid");
  }

  return await readByEmail(email, db);
};
