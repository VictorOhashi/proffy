import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('materias', (table) => {
    table.increments('id').primary();
    table.string('materia').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('materias');
}
