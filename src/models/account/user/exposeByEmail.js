export default async (email, db) => {
  const user = await db
    .first("*")
    .from("users")
    .where({ email });

  return (
    user && {
      id: user.id,
      hash: user.hash
    }
  );
};
