const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema({
    title:{type:String,require:true}
},{timestamps:true});
const Todo=mongoose.model("todo",todoSchema);
module.exports=Todo;