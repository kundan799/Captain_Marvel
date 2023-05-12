const Todo = require("../Model/Todo.model")

const createTodo=async(req,res)=>{
    try {
        await Todo.create(req.body);
        res.status(201).send({message:"Posted",error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const getTodo=async(req,res)=>{
    try {
        let todos=await Todo.find();
        res.status(200).send({message:todos,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true}) 
    }
}
const updateTodo=async(req,res)=>{
    try {
        await Todo.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
        res.status(200).send({message:"Updated",error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const deleteTodo=async(req,res)=>{
    try {
        await Todo.findByIdAndRemove(req.params.id);
        res.status(200).send({message:"Deleted",error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
module.exports={createTodo,getTodo,updateTodo,deleteTodo}