const express = require ('express');
const mongoose = require('mongoose');


port = 3000;

const app = express();


app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//Configuracion de Mongo aplication
mongoose.connect('mongodb://127.0.0.1:27017/Burger', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', err => {
  console.error('Error de conexión a la base de datos:', err);
});





//Controlares
const homeController = require('./controllers/homeController');


//Rutas
app.get('/', homeController.index);






app.listen (port , ()=> {
    console.log(`Servidor funcionando en ${port}`)
})