import { prop } from "ramda";

export const pluckIf = (cond, key, items) =>
  items.reduce(
    (acc, item) => (cond(item) ? [...acc, prop(key, item)] : acc),
    []
  );
