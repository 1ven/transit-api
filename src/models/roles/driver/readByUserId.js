export default async (userId, db) =>
  await db
    .first("*")
    .from("drivers")
    .where({ user_id: userId });
