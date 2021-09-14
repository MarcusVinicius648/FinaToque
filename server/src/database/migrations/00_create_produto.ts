import {Knex} from 'knex';
export async function up(knex:Knex){
    return knex.schema.createTable('produto', table =>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.decimal('valorCompra').notNullable();
        table.decimal('valorVenda').notNullable();
        table.integer('quantidade').notNullable();
    });
}
export async function down(knex:Knex) {
    return knex.schema.dropTable('produto')
}