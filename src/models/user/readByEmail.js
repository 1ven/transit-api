import { pick } from "ramda";

export default async (email, db) => {
  const user = await db
    .first("*")
    .from("users")
    .where({ email });

  return pick(["id", "email"], user);
};
