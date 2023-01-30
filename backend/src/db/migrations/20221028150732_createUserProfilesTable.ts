import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_profiles', (table) => {
    table.integer('user_id').unsigned();
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE');
    table.string('about');
    table.string('work');
    table.string('avatar').notNullable();
    table.string('primary_color').defaultTo('#000');
    table.string('secondary_color').defaultTo('#fff');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users_profiles');
}
