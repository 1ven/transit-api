exports.up = function(knex, Promise) {
  return knex.schema.createTable("customers", function(table) {
    table.increments("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table
      .integer("user_id")
      .unique()
      .notNullable()
      .references("users.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("customers");
};
