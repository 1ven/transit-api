import bcrypt from "bcrypt";
import Boom from "boom";
import * as userModel from "models/account/user";

export default async ({ email, password }, db) => {
  // TODO: implement validation?

  const info = await userModel.exposeByEmail(email, db);

  if (!info || !await bcrypt.compare(password, info.hash)) {
    throw Boom.badRequest("Sorry! Your email or password is invalid");
  }

  return await userModel.readById(info.id, db);
};
