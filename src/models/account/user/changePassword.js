import bcrypt from "bcrypt";
import moment from "moment";
import Boom from "boom";
import { errors } from "core/conceptions/model";
import * as resetTokenModel from "models/account/reset-token";

export default async (token, password, db) => {
  /**
   * Removing token entry row, as we don't need to be able change a password twice.
   */
  const entry = resetTokenModel.removeToken(token, db);

  if (!entry || isTokenExpired(entry)) {
    throw new errors.ClientError("Invalid token");
  }

  return await db
    .update({ hash: await bcrypt.hash(password, 12) })
    .from("users")
    .where({ id: entry.user_id });
};

const isTokenExpired = entry => moment().diff(entry.expired) > 0;
