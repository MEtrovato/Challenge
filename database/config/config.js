const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('challenge_db', 'root', 'Monito123!', {
  host: 'localhost', 
  dialect: 'mysql', 
});

module.exports = {
  "development": {
    "username": "root",
    "password": "Monito123!",
    "database": "challenge_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}



