import express from 'express';
const app = express();
http = require("http").Server(app).listen(3000);
console.log("Server started at port 3000");
app.get("/", function(req,res){
        res.sendFile(__dirname+"login.html")
})