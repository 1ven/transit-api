import knex from "knex";
import knexfile from "../../../../knexfile";

// TODO: implement connection retrying
// TODO: make it a function instead and call in `bootstrap`
export const connection = knex(knexfile);
