require("dotenv").config();
const express = require('express')
const app = express()
const cors=require("cors");
const todoRouter=require("./Router/todo.routes");
const dbConnect=require("./DB/db");
app.use(cors({
    origin:"https://effortless-profiterole-22b27b.netlify.app"
}));

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/', (req, res) => res.send('hello'))
app.use('/api/todo',todoRouter);
dbConnect();
app.listen(8080, () => {console.log('server started on port 8080')})