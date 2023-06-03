const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
app.set('view engine', 'hbs');
const port = process.env.PORT || 3000;

// Configuración de la base de datos
async function connectDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Burger', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
  }
}

connectDatabase();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Controladores y rutas
const homeController = require('./controllers/homeController');




app.get('/', homeController.index);


const productRoutes = require('./routes/products');
app.use('/products', productRoutes);


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
