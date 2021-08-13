// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      // TODO change to your db name
      database: 'mycontacts',

      // change to your db user
      user: 'postgres',
      password: 'Voyager@1997',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
