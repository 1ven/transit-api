exports.up = function(knex, Promise) {
  return knex.schema.createTable("password_reset_tokens", function(table) {
    table
      .integer("user_id")
      .references("users.id")
      .notNullable();
    table
      .string("token")
      .unique()
      .notNullable();
    table.timestamp("expired").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("password_reset_tokens");
};
