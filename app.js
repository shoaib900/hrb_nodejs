var express = require('express');
var path = require('path');
 var app = express();
 var mongoose = require('mongoose');

 app.use(express.static('public'));


 mongoose.connect('mongodb+srv://rshoaib376:shoaib900@cluster0.ohwrz.mongodb.net/')
  .then(() => console.log('DB is Connected!'));

//  app.get("/",function(req,res){
//     res.end("hello world")
//  })

app.get("/",function(req,res){
    // res.sendFile("./public/index.html")
    res.sendFile(path.join('public/index.html'))
})

app.get("/service",(req,res)=> {
    res.sendFile(path.join(__dirname,'public/service.html'))
})

app.get("/service/:name",(req,res)=>{
    res.send("hello world " + req.params.name);
})



// app.get("/",(req,res) =>{
//     res.end("hello world 3")
//  })

//  app.get("/api",(req,res) => {
//     res.json({
//         message: "Welcome to our API",
//         name:"Shoaib",
//         number: 34,
//         age: 22,
//         "full name": "Shoaib Raza",
//     })
//     console.log("API is running on port 8080")
//  })

 app.listen(8080,()=> {console.log("server is running now...")});
