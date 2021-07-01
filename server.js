const express = require('express');
const user=require('./routes/user')
const conectDB=require('./config/ConectDb')
const product=require('./routes/product');
const cart = require('./routes/cart');


const app=express();
app.use(express.json());


app.use('/user',user);
app.use('/product',product);
app.use('/cart',cart);
conectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT,(err)=>
err?console.log(err):console.log(`Server is runing successfuly on ${PORT}`))