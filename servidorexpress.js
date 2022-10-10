const express = require("express");

const server = express();

server.get("/",function(req,res){
    res.send("<h1>Respuesta desde el servidor express</h1>");
    res.end();
});

server.listen(3000,function(){
    console.log("Servidor escuchando en el puerto 3000");

});