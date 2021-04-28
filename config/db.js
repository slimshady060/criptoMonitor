const config = require('./index');

module.exports = {
  // config DB
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  host: config.database.host,
  dialect: config.database.dialect,
  // config seeds
  seederStorage: 'sequelize',
  seederStorageTableName: 'seeds',
  // config migrations
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'migrations',
};
