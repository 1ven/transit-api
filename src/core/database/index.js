import knex from "knex";
import knexfile from "../../../knexfile";

export const connection = knex(knexfile);
