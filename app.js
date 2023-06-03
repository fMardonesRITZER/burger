const express = require ('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

port = process.env.port || 3000;

const app = express();
app.set('view engine', 'hbs');



app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//Configuracion de Mongo aplication
mongoose.connect('mongodb://127.0.0.1:27017/Burger', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', err => {
  console.error('Error de conexión a la base de datos:', err);
});




//METODO OVERRIDE



app.use(methodOverride('_method'))


//Controlares
const homeController = require('./controllers/homeController');
const productRoutes = require("./routes/products");

app.use('/', productRoutes);

//Rutas
app.get('/', homeController.index);








app.listen (port , ()=> {
    console.log(`Servidor funcionando en ${port}`)
})