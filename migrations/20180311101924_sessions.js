exports.up = function(knex, Promise) {
  return knex.schema.createTable("sessions", function(table) {
    table
      .string("session_id")
      .unique()
      .notNullable();
    table.integer("user_id").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("sessions");
};
