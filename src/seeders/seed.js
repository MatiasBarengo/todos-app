const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos-categories.model');


const users = [
  {
    username: 'MatiasBarengo',
    email: 'matiasbarengo99@gmail.com',
    password: '1234'
  }, // usuario de id 1
  {
    username: 'SelenaGuaymas',
    email: 'seleguaymas00@gmail.com',
    password: '1234'
  },// usuario de id 2
  {
    username: 'tumamaentanga',
    email: 'tumama@gmail.com',
    password: '1234'
  },// usuario de id 3

];

const todos = [
  { title: 'la entrega de node', description: 'entregar la base de datos de todos', userId: 1 },
  { title: 'pasear al perro', description: '', userId: 1 },
  { title: 'lavar platos', description: 'entregar la base de datos de todos3', userId: 2 },
  { title: 'ir al chequeo mensual', userId: 3 }
];

const categories = [
  { name: 'personal' },
  { name: 'educacion' },
  { name: 'salud' },
  { name: 'trabajo' },
  { name: 'hogar' },
  { name: 'cocina' },
  { name: 'deporte' },
  { name: 'ocio' },
  { name: 'financiero' },
  { name: 'entretenimiento' },
];

const todosCategories = [
  { categoriesId: 1, todosId: 1 },
  { categoriesId: 2, todosId: 1 },
  { categoriesId: 4, todosId: 1 },
  { categoriesId: 1, todosId: 2 },
  { categoriesId: 7, todosId: 2 },
  { categoriesId: 10, todosId: 2 },
  { categoriesId: 3, todosId: 2 },
  { categoriesId: 5, todosId: 3 },
  { categoriesId: 6, todosId: 3 },
  { categoriesId: 1, todosId: 4 },
  { categoriesId: 3, todosId: 4 },
];

// create crea un elemento en la tabla
// findOne, findAll, findByPk encuentra segun lo especificado
// update actualiza la tabla
// destroy borra

db.sync({ force: true })
  .then(() => {
    console.log('iniciando con el sembradio malicioso');
    users.forEach((user) => Users.create(user)) // create = insert into users

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo))
    }, 100)

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category))
    }, 250)

    setTimeout(() => {
      todosCategories.forEach((tc) => TodosCategories.create(tc))
    }, 400)
  })
  .catch((error) => console.log(error))