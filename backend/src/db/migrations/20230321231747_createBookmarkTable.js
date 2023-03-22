/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bookmarks", (table) => {
    table.integer("post_id").unsigned().unique();
    table
      .foreign("post_id")
      .references("_id")
      .inTable("posts")
      .onDelete("CASCADE");
    table.integer("user_id").unsigned().unique();
    table
      .foreign("user_id")
      .references("_id")
      .inTable("users")
      .onDelete("CASCADE");
    table.boolean("isNotified").defaultTo(false);
    table.boolean("isActive").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("bookmarks");
};
