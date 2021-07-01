
const express=require("express");
const {register, login, authUser}=require("../controllers/userControllers");
const isAuth=require("../middleware/auths");
const {validator, registerResult}=require("../middleware/validator")
const router=express.Router();

router.post('/register',registerResult(),validator,register);
router.post('/login',login)
router.get('/auth',isAuth,authUser);

module.exports=router;