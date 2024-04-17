const express=require("express");
const app=express();
const port=5000;
const bodyParser = require('body-parser');
const mongoose=require("mongoose");
const usermodel= require("./models/usermodel");
mongoose.connect("mongodb://localhost:27017/mydatabase");
app.use(bodyParser.json());
app.use("/",(req,res)=>{
    res.send("hello world");
})
app.post("/",(req,res)=>{
    let name=req.name;
    let email=req.email;
    let password=req.password;
    console.log(`${name }  ${email }  ${password}`);
    usermodel.add({
        name : name,
        email:email,
        password:password
    })
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})