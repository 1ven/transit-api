exports.up = function(knex, Promise) {
  return knex.schema.table("users", function(table) {
    table.enu("role", ["driver", "customer"]).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("users", function(table) {
    table.dropColumn("role");
  });
};
