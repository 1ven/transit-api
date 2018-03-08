import bcrypt from "bcrypt";
import { pick } from "ramda";

export default async ({ email, password }, db) => {
  // TODO: implement input data validations
  const hash = await bcrypt.hash(password, 12);
  const user = (await db
    .insert({ email, hash })
    .into("users")
    .returning("*"))[0];

  return pick(["id", "email"], user);
};
