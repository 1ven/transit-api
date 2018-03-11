import { pick } from "ramda";

export default async (email, db) => {
  const user = (await db
    .select("*")
    .from("users")
    .where({ email }))[0];

  return pick(["id", "email"], user);
};
