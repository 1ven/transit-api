import { pick } from "ramda";
import * as customer from "models/roles/customer";
import * as driver from "models/roles/driver";

export default async (id, db) => {
  const user = await db
    .first("*")
    .from("users")
    .where({ id });

  const entry =
    user.role === "customer"
      ? await customer.readByUserId(user.id, db)
      : user.role === "driver" ? await driver.readByUserId(user.id, db) : null;

  return {
    ...pick(["id", "email", "role"], user),
    role_entry: entry
  };
};
