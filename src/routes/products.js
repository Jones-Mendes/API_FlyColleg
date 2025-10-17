const express = require('express')
const router = express.Router()
const { insertProduct } = require('../controllers/products')
const productsMiddlewares = require('../middlewares/products')
const productsControllers = require('../controllers/products')

router.post(
'/products', 
productsMiddlewares.validateProduct, 
productsControllers.insertProduct
)
router.get(
    '/products', productsControllers.getAllProducts

)

module.exports = router