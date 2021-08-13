
exports.up = function(knex) {
    return knex.schema.createTable('contacts', table => {
        table.text('name').notNullable();
        table.text('surname');
        table.text('email').notNullable();
        table.boolean('professional').defaultTo('personal');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contacts')

};
