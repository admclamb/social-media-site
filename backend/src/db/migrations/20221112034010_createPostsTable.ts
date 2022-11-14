import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('posts', (table) => {
    table.increments('post_id').primary();
    table.string('title').nullable();
    table.integer('author_id').unsigned();
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE');
    table.string('header_image_url').nullable();
    table.string('image_url').nullable();
    table.string('body').notNullable();
    table.specificType('tags', 'text ARRAY').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('posts');
}
