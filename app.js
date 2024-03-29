const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();


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
const productRoutes = require('./routes/products');
const contactController = require('./controllers/contactController');

app.use('/products', productRoutes);
app.get('/', homeController.index);
app.get('/contact', contactController.showContactForm);
app.post('/contact', contactController.submitContactForm);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});

