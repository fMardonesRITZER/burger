const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/products', productController.index);
router.get('/products/new', productController.new);
router.post('/products', productController.create);
router.get('/products/:id', productController.show);
router.get('/products/:id/edit', productController.edit);
router.post('/products/:id', productController.update);
router.post('/products/:id/delete', productController.delete);

module.exports = router;