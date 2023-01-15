const db = require('../utils/database');

const { DataTypes } = require('sequelize');
const Users = require('./users.models');

const Todos = db.define('todos', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true, 
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_complete' // hace que en la base pase de camel case a snake case
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: Users,
      key: 'id'
    } // para indicar que es una llave foranea
  }
},
{
  timestamps: false
}); 

module.exports = Todos;