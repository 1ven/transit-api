import bcrypt from "bcrypt";
import Boom from "boom";
import readByEmail from "../readByEmail";

export default async ({ email, password }, db) => {
  // TODO: implement validation?

  const { hash } = (await db
    .select("*")
    .from("users")
    .where({ email }))[0];

  if (!await bcrypt.compare(password, hash)) {
    throw Boom.unauthorized();
  }

  return await readByEmail(email, db);
};
