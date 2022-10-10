function suma(a,b) {
    return a+b;
    
}

function resta(a,b) {
    return a-b;
    
}

function multiplicacion(a,b) {
    return a*b;
    
}

function division(a,b) {
    if (b==0){
        console.log("No se puede dividir")
    }else{
        return a/b;
    }
    
}
function saludo(nombre) {
    console.log(nombre);
    
}

exports.saludo=saludo;
exports.suma=suma;
exports.resta=resta;
exports.multiplicacion=multiplicacion;
exports.division=division;
/*
console.log(suma(5,6));
console.log(resta(5,6));
console.log(multiplicacion(5,6));
console.log(division(5,6));
*/
