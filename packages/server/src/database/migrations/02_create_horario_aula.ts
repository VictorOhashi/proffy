import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('horario_aula', (table) => {
    table.increments('id').primary();

    table.integer('dia_semana').notNullable();
    table.integer('horario_inicio').notNullable();
    table.integer('horario_fim').notNullable();

    table
      .integer('id_aula')
      .notNullable()
      .references('id')
      .inTable('aulas')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('horario_aula');
}
