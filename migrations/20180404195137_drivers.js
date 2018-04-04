exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("drivers", function(table) {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unique()
        .notNullable()
        .references("users.id");
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("photo");
      table.integer("price").notNullable();
    })
    .createTable("drivers_parcel_types", function(table) {
      table
        .integer("driver_id")
        .notNullable()
        .references("drivers.id")
        .onDelete("CASCADE");
      table.enu("parcel_type", ["small", "medium", "large"]).notNullable();
      table.unique(["driver_id", "parcel_type"]);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("drivers_parcel_types").dropTable("drivers");
};
