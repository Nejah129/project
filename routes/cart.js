const express = require('express');

const isAuth =require('../middleware/auths')
const{ getCartItems, addCartItems, deleteitem }=require('../controllers/cartContoller')
const router=express.Router()


//get items of the user cart
router.get('/get_cart/:id',isAuth,getCartItems);
//add items to the user cart
router.post('/add_cart/:id',isAuth,addCartItems);
//delete a item from the user cart
router.delete('/delete_cart/:userId/:itemId',isAuth,deleteitem);


module.exports=router;