const mongoose =require("mongoose");
const Schema=mongoose.Schema;

const categorySchema=Shema({
    tiltle:{
        type:string,required:true,unique:true
    }
});
module.exports=mongoose.model(Category,categorySchema);