import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('aulas', (table) => {
    table.increments('id').primary();
    table.decimal('id_materia').notNullable();
    table.integer('custo').notNullable();
    table
      .integer('id_usuario')
      .notNullable()
      .references('id')
      .inTable('usuarios')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('aulas');
}
