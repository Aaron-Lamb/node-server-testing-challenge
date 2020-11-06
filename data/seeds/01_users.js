exports.seed = async function(knex) {
  await knex('tests').insert([
          {username: 'AJ'},
          {username: 'AG'},
          {username: 'CG'}
        ]);
  };
