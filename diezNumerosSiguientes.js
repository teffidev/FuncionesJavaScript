//Adivinar los siguientes 10 números de una cifra dada
let losDiezSiguientes = number => {
    let resultado = number

    for (let i = 1; i <= 10; i++) {
        resultado ++
        console.log(resultado);    
    }
}
let mostrarLosDiez = losDiezSiguientes(5)
console.log(mostrarLosDiez);
console.log('---Otra forma---');

const diezNumerosSiguientes = num => {
    
    for (let i = 1; i <= 10; i++) {
        console.log('-----------');
        console.log(num + i);
    }
    return `Usted ingresó el número: ${num}`
}
console.log(diezNumerosSiguientes(20));