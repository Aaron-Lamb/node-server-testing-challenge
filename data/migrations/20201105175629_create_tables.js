exports.up = async function(knex) {
    await knex.schema.createTable('tests', (table) => {
        table.increments('id')
        table.text('username')
    })
  };

  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('tests');
  };