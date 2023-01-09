// vamos a importar todos nuestros modelos creados
const Users = require('./users.model');
const Todos = require('./todos.model');
const TodosCategories = require('./todos-categories.module');
const Categories = require('./categories.model');

const initModels = () => {
  //vamos a crear las relaciones
  //- hasOne
  //- hasMany
  //- belongsTo

  // relacion uno a muchos de users a todos
  Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
  Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'});

  // relacion de muchos a muchos de categories y todos: 
  // todos a todos-categories
  TodosCategories.belongsTo(Todos, {as: 'task', foreignKey: 'todos_id'});
  Todos.hasMany(TodosCategories, {as: 'category', foreignKey: 'todos_id'});
  // categories a todos-categories
  TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'categories_id' });
  Categories.hasMany(TodosCategories, {as: 'task', foreignKey: 'categories_id'})
};

module.exports = initModels;