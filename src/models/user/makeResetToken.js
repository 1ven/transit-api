import uuid from "uuid/v4";
import Boom from "boom";
import moment from "moment";
import readByEmail from "./readByEmail";

export default async (email, db) => {
  const token = uuid();
  const user = await readByEmail(email, db);

  if (!user) {
    throw Boom.notFound("User with given email is not found");
  }

  await db
    .insert({
      user_id: user.id,
      token,
      expired: moment().add(30, "minutes")
    })
    .into("password_reset_tokens");

  /**
   * Sending email
   */
  console.log(token);

  return token;
};
