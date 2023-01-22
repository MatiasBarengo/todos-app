const { Sequelize } = require( 'sequelize' );
require( 'dotenv' ).config()
// crear una instancia con parametrosa de configuracion
// de nuestra base de datos
// necesitamos un objeto de configuracion que son las credenciales
// de nuestra base de datos
const db = new Sequelize( {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST, // 127.0.0.1
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  logging: false
} );

module.exports = db;