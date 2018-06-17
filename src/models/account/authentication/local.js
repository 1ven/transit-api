import bcrypt from "bcrypt";
import Boom from "boom";
import { errors } from "core/conceptions/model";
import * as userModel from "models/account/user";

export default async ({ email, password }, db) => {
  // TODO: implement validation?

  const info = await userModel.exposeByEmail(email, db);

  if (!info || !(await bcrypt.compare(password, info.hash))) {
    throw new errors.ClientError("Sorry! Your email or password is invalid");
  }

  return await userModel.readById(info.id, db);
};
