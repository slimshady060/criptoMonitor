require('dotenv').config();

const config = {
  api: {
    port: process.env.PORT || 8080,
  },
  database: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExprired: process.env.JWT_EXP || '1d',
    headerType: 'authorization',
    algorithm: 'RSA256',
    saltRounds: process.env.SALT_ROUNDS || 10,
  },
};

module.exports = config;
