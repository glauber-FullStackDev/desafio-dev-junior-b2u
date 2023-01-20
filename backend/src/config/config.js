require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'desafiob2u',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};