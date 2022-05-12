let numero = 5
if (numero >= 5 && numero < 20) {
    for (let i = 1; i <= 4; i++) {
        numero = numero + 3
        console.log('-----------');
        console.log(`contador: ${i}`);
        console.log(`numero: ${numero}`);
    }
}
console.log('------Otra forma------');

/*Contar de 3 en 3 desde una cifra dada para iniciar, 
hasta una cifra dada para detenerse*/
let deTresEnTres = (min, max) => {
    let i = min
    let contador = min

    do{
        contador = contador + 3
        console.log(contador)
        i = i + 3
    }
    while (i < max)
}
let resultadoTresEnTres = deTresEnTres(5, 20)
console.log(resultadoTresEnTres);
