require('dotenv').config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
  DB_HOSTNAME,
  DB_NAME
} = process.env;

module.exports=
{
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "port": DB_PORT,
    "host": DB_HOSTNAME,
    "dialect": 'mysql'
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "port": DB_PORT,
    "host": DB_HOSTNAME,
    "dialect": 'mysql'
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "port": DB_PORT,
    "host": DB_HOSTNAME,
    "dialect": 'mysql'
  }
}
