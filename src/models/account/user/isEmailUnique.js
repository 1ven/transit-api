export default async (email, db) =>
  !(await db
    .select("id")
    .from("users")
    /**
     * Using `null` as knex will throw an error if email will be undefined.
     */
    .where("email", email || null))[0];
