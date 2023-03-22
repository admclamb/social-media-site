/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("_id").primary();
    table.string("title").notNullable();
    table.text("slug").notNullable();
    table.integer("author_id").unsigned().notNullable();
    table
      .foreign("author_id")
      .references("_id")
      .inTable("users")
      .onDelete("CASCADE");
    table.text("header_image_url").nullable();
    table.text("body").notNullable();
    table.integer("number_of_likes").defaultTo(0);
    table.integer("number_of_bookmarks").defaultTo(0);
    table.integer("number_of_comments").defaultTo(0);
    table.specificType("tags", "integer ARRAY");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
