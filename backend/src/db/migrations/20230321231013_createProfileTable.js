/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("profiles", (table) => {
    table.integer("user_id").unsigned();
    table
      .foreign("user_id")
      .references("_id")
      .inTable("users")
      .onDelete("CASCADE");
    table.text("first_name").notNullable();
    table.text("last_name").notNullable();
    table.string("password").notNullable();
    table.string("about");
    table.text("avatar").notNullable();
    table.text("primary_color").defaultTo("#000");
    table.text("secondary_color").defaultTo("fff");
    table.text("work").nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("profiles");
};
