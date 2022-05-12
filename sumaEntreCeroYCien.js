/*Suma todos los numeros consecutivos hasta llegar al 
numero maximo entregado (100).*/
let sumarConsecutivos = number => {
    let resultado = 0

    for (let i = 1; i <= number; i++) {
        resultado = resultado + i
    }
    return resultado
}
let sumaConsecutiva = sumarConsecutivos(100)
console.log(sumaConsecutiva);
console.log('------Otra forma-------');

/*--------*/
let sumaCeroYCien = 0
let n = 100

for (let i = 1; i <= n; i++) {
    sumaCeroYCien = sumaCeroYCien + i
    console.log(sumaCeroYCien);    
}
