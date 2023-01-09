const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');


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
  {
    title: 'la entrega de node',
    description: 'entregar la base de datos de todos',
    userId: 1
  },
  {
    title: 'la entrega de node2',
    description: 'entregar la base de datos de todos2',
    userId: 1
  },
  {
    title: 'la entrega de node3',
    description: 'entregar la base de datos de todos3',
    userId: 2
  },
  {
    title: 'tarea imposible',
    userId: 3
  }
];

// const categories = [];

// const TodosCategories = [];

// create crea un elemento en la tabla
// findOne, findAll, findByPk encuentra segun lo especificado
// update actualiza la tabla
// destroy borra

db.sync({force: true})
  .then(() => {
    console.log('iniciando con el sembradio malicioso');
    users.forEach((user) => Users.create(user)) // create = insert into users
    
    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo))
    }, 100)
  })
  .catch((error) => console.log(error))