import { Knex } from 'knex';
export async function up(knex: Knex) {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.integer('valorCompra').notNullable();
        table.integer('valorVenda').notNullable();
        table.integer('quantidade').notNullable();
    });
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('produtos')
}