const db = require('../utils/database');

const { DataTypes } = require('sequelize');

const Categories = db.define('categories', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},
{
  timestamps: false
});

module.exports = Categories;