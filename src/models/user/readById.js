import { pick } from "ramda";

export default async (id, db) => {
  const user = await db
    .first("*")
    .from("users")
    .where({ id });

  return pick(["id", "email"], user);
};
