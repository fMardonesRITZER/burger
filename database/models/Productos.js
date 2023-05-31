const mongoose = require('mongoose');

const burgerSchema = new mongoose.Schema({
  producto: String,
  precio_unitario: Number,
});

module.exports = mongoose.model('productos', burgerSchema);