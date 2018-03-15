import bcrypt from "bcrypt";
import moment from "moment";
import Boom from "boom";

export default async (token, password, db) => {
  /**
   * Removing token entry row, as we don't need to be able change a password twice.
   */
  const entry = (await db
    .delete()
    .from("password_reset_tokens")
    .where({ token })
    .returning("*"))[0];

  if (!entry || isTokenExpired(entry)) {
    throw Boom.badRequest("Invalid token");
  }

  return await db
    .update({ hash: await bcrypt.hash(password, 12) })
    .from("users")
    .where({ id: entry.user_id });
};

const isTokenExpired = entry => moment().diff(entry.expired) > 0;
