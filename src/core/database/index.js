import knex from "knex";
import knexfile from "../../../knexfile";

// TODO: implement connection retrying
export const connection = knex(knexfile);
