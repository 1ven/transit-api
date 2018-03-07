module.exports = {
  client: "pg",
  connection: {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    port: 5432
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
