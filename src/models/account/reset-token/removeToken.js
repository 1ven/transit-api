export default async (token, db) =>
  (await db
    .delete()
    .from("password_reset_tokens")
    .where({ token })
    .returning("*"))[0];
