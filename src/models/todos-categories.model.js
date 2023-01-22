const db = require('../utils/database');

const { DataTypes } = require('sequelize');
const Categories = require('./categories.models');
const Todos = require('./todos.models');

const TodosCategories = db.define('todos_categories', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  todosId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'todos_id',
    references: {
      model: Todos,
      key: 'id'
    }
  },
  categoriesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'categories_id'
  }
},
{
  timestamps: false
});

module.exports = TodosCategories;