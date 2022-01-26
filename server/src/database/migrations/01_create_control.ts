import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('control', table => {
        table.increments('id').primary();
        table.integer('valorBruto').notNullable();
        table.integer('precoVenda').notNullable();
        table.integer('valorObtido').notNullable();
        table.integer('lucroPrejuizo').notNullable().notNullable();
    });
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('control');
}