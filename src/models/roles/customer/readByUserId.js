export default async (userId, db) =>
  await db
    .first("*")
    .from("customers")
    .where({ user_id: userId });
