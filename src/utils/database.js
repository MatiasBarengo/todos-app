const {Sequelize} = require('sequelize');

// crear una instancia con parametrosa de configuracion
// de nuestra base de datos
// necesitamos un objeto de configuracion que son las credenciales
// de nuestra base de datos
const db = new Sequelize({
  database: 'todoapp',
  username: 'postgres',
  host: 'localhost', // 127.0.0.1
  port: '5432',
  password: 'matimati',
  dialect: 'postgres'
});

module.exports = db;