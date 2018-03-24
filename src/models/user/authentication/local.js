import bcrypt from "bcrypt";
import Boom from "boom";
import readByEmail from "../readByEmail";

export default async ({ email, password }, db) => {
  // TODO: implement validation?

  const user = await db
    .first("*")
    .from("users")
    .where({ email });

  if (!user || !await bcrypt.compare(password, user.hash)) {
    throw Boom.unauthorized("Sorry! Your email or password is invalid");
  }

  return await readByEmail(email, db);
};
