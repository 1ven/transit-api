exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments("id").primary();
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("hash").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
