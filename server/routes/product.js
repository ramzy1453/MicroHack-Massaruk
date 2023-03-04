const express = require('express')
const {createProduct, getAllProducts, getSingleProduct, searchProduct, updateProduct, deleteProduct} = require('../controllers/product')

const {isAuth} = require('../middleware')

const router = express.Router()

router.post('/',isAuth,createProduct)
router.get('/',getAllProducts)
router.get('/search',searchProduct)
router.get('/:id',getSingleProduct)
router.patch('/:id',isAuth,updateProduct)
router.delete('/:id',isAuth,deleteProduct)

module.exports = router