const prompt = require("prompt-sync")( { sigint: true })

let numero = (+prompt('Ingrese el numero: '))
let total = 1

for (let i = 1; i <= numero; i++) {
    total = total * i
}
console.log(`El factorial de ${numero} es igual a: ${total}`);

/////////////////////////////////////////
console.log('------Otra forma------');

/*Dado un numero, multiplicar todos los numeros que 
se encuentran hasta llegar a 1*/
let factorial = number => {
    let resultado = 1
    for (let i = number; i > 0; i--) {
        resultado = resultado * i    
    }
    return resultado
}
let multiplicar = factorial(5)
console.log(multiplicar);