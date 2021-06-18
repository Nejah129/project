const mongoose= require("mongoose");
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        equired:true},
        lastName:{
            type:String,required:true
        },
        roles: {
            type: [{
                type: String,
                enum: ['user', 'admin']
            }],
            default: ['user']
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
