import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('conexoes', (table) => {
    table.increments('id').primary();

    table
      .integer('id_usuario')
      .notNullable()
      .references('id')
      .inTable('usuarios')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table
      .timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('conexoes');
}
