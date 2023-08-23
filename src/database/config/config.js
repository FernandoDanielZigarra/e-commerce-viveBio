require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    port : process.env.DB_PORT
  },
  test: {
    username: "postgres",
    password: "root",
    database: "vivebio_db",
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    /* operatorsAliases: false, */
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}


