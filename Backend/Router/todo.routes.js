const express=require("express");
const { createTodo, getTodo, updateTodo, deleteTodo } = require("../Controller/todo.controller");
const app=express.Router();
app.post("/",createTodo);
app.get("/",getTodo);
app.patch("/:id",updateTodo);
app.delete("/:id",deleteTodo);

module.exports=app;


