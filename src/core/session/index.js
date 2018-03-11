import Keygrip from "keygrip";

// Should get secret from env
const keygrip = Keygrip(["secretkey"]);

export const key = "session_id";

export const signSession = sessionId =>
  `${sessionId}.${keygrip.sign(sessionId)}`;

export const unSignSession = signedSessionId => {
  const [signature, sessionId] = signedSessionId.split(".");
  return Boolean(
    signature && sessionId && keygrip.verify(sessionId, signature)
  );
};
