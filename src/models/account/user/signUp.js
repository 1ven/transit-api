import bcrypt from "bcrypt";
import { pick } from "ramda";

export default async ({ role, email, password }, db) => {
  const hash = await bcrypt.hash(password, 12);
  const user = (await db
    .insert({ role, email, hash })
    .into("users")
    .returning("*"))[0];

  return pick(["id", "email", "role"], user);
};
