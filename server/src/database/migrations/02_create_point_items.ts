import Knex from 'knex'; // importa o formato da variavel para conseguir acessar o intellisense

export async function up(knex: Knex) {
   return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        
        table.string('point_id')
        .notNullable()
        .references('id')
        .inTable('points');

        table.string('item_id')
        .notNullable()
        .references('id')
        .inTable('items');

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items')
}