const express = require('express');
const isAuth=require("../middleware/auths");
const { addProduct, deletProduct, getAllProducts, getOneProduct } = require('../controllers/productController');
const roleCheck = require('../middleware/roleCheker');
const router=express.Router();



router.post('/add_product',isAuth,roleCheck(['Admin']),addProduct)
router.delete('/delet_product/:id',isAuth,roleCheck(['Admin']),deletProduct)
router.get('/get_product',getAllProducts)
router.get('/get_product/:id',getOneProduct)
module.exports=router;