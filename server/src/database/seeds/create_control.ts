import { Knex } from "knex";
export async function seed(knex:Knex) {
    await knex('control').insert([
        {valorBruto:0, precoVenda:0, valorObtido:0,lucroPrejuizo:0}
    ]);
}