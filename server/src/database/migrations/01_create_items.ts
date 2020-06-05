import Knex from 'knex'; // importa o formato da variavel para conseguir acessar o intellisense

export async function up(knex: Knex) {
   return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('items')
}