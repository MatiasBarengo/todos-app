// importamos express
const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.model');
const Users = require('./models/users.model');
const Todos = require('./models/todos.model');
// creo una instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => console.log('autenticacion exitosa'))
  .catch((error) => console.log(error));

initModels();

// vamos a usar el metodo sync de nuestra base de datos
db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log('base de datos sincronizada'))
  .catch((error) => console.log(error))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'bienvenido al servidor' });
});

// definir las rutas de nuestros EP (end points)
// todas las consultas de usuarios
// localhost:8000/users => todo para usuarios
// localhost:8000/todos => todo para tareas

// GET a /users
app.get('/users', async (req, res) => {
  try {
    // vamos a obtener el resultado de consultar a todos 
    // los usuarios de la base de datos
    const result = await Users.findAll(); // select * from users
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
  }
});

// obtener un usuario con su id
app.get('/users/:id', async (req, res) => {
  try {
    // const { id } = req.params;
    const id = req.params.id;
    const result = await Users.findByPk(id);
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
});

// obtener un usuario por su username
app.get('/users/username/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const result = await Users.findOne({ where: { username: username } }); // select * from users where username = MatiasBarengo
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
});

// creando un usuario
app.post('/users', async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

// actualizar usuario (solo podemos cambiar la contraseña)
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await Users.update(field, { where: { id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// eliminar un usuario
app.delete('/users/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const result = await Users.destroy({where: {id}});
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.get("/todos", async (req, res) => {
  try {
    const result = await Todos.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
});

app.post("/todos", async (req, res) => {
  try {
    const todo = req.body;
    const result = await Todos.create(todo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const field = req.body;
    const result = await Todos.update(field, { where: { id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todos.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
})

app.listen(PORT, () => {
  console.log(`servidor coriendo en el puerto ${PORT}`);
});

// insertar informacion en mi base de datos
// desde el proyecto de node

// consultar la informacion con endpoints