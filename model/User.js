const mongoose= require("mongoose");
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        equired:true},
        lastName:{
            type:String,required:true
        },
        userRole: {
            type: String,
            default: 'User',
            roles: ['User', 'Admin'],
          },
    email:{type:String,required:true,unique:true},
    phone:String,
    password:String ,
    date: { type: Date, default: Date.now },
    avatar:{
        type:String
    },

})
module.exports=mongoose.model('User',userSchema);
