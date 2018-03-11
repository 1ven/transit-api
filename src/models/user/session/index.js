import uuidv4 from "uuid/v4";

export const createSession = async ({ userId }, db) => {
  const sessionId = uuidv4();

  await db.insert({ user_id: userId, session_id: sessionId }).into("sessions");

  return { sessionId, userId };
};

export const readSession = async (sessionId, db) => {
  const session = await db
    .first("*")
    .from("sessions")
    .where({ session_id: sessionId });

  return session ? { sessionId, userId: session.user_id } : null;
};
