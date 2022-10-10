const os = require("os");

console.log(os.freemem(),"bytes disponibles en el equipo");
console.log(os.totalmem());

const fs = require("fs");
fs.writeFile("./texto.txt","El hijo de rana rin rin renacuajo",function(err){
    if (err) {
        console.log(err);
    }
    console.log("Archivo creado");
});
console.log("Hemos terminado la ejecución");