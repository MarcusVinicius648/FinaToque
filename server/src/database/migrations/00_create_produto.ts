import {Knex} from 'knex';
export async function up(knex:Knex){
    return knex.schema.createTable('produto', table =>{
        table.integer('id').primary();
        table.string('nome');
        table.integer('valorCompra').notNullable();
        table.integer('valorVenda').notNullable();
        table.integer('quantidade').notNullable();
    });
}
export async function down(knex:Knex) {
        knex.schema.dropTable('produto')
}