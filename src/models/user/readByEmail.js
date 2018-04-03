import { pick } from "ramda";

export default async (email, db) => {
  const user = await db
    .first("*")
    .from("users")
    .where({ email });

  return user && pick(["id", "email", "role"], user);
};
