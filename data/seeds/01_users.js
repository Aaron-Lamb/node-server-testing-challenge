
exports.seed = async function(knex) {
await knex('users').insert([
        {username: 'AJ'},
        {username: 'AG'},
        {username: 'CG'}
      ]);
};
