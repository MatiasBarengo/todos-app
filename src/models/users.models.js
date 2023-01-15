// instancia para conexion con la db
const db = require('../utils/database');

// tipos de datos de sequelize: 
// VARCHAR ===> STRING
const { DataTypes } = require('sequelize');

// definir el modelo de usuarios
// los modelos se definen con una mayuscula
// acepta 2 parametros: 
// 1- nombre de la tabla
// 2- los atributos de la tabla (objeto)
const Users = db.define('users', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true ,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  timestamps: false
});

module.exports = Users;