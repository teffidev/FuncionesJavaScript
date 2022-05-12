const prompt = require("prompt-sync")({sigint: true});

const a = (+prompt('Ingrese un número: '))
const b = (+prompt('Ingrese otro número: '))
const c = (+prompt('Ingrese un tercer número: '))

console.log('-----Calculadora Nivel I-----');

const sumar = (a, b) => a + b

const restar = (a, b) => a - b

const multiplicar = (a, b) => a * b

const dividir = (a, b) => a / b

console.log('-----Nivel II - Probando funciones-----')

console.log(`El resultado de la suma es = ${sumar(a, b)}`)
console.log(`El resultado de la resta es = ${restar(a, b)}`)
console.log(`El resultado de la multiplicación es = ${multiplicar(a, b)}`)
console.log(`El resultado de la división es = ${dividir(a, b)}`)


console.log('--------Nivel III---------');

/*Encontrar el cuadrado de un número dado.*/
const cuadradoDeUnNumero = num => {
    let numeroElevado = multiplicar(num, num)
    return numeroElevado
}
console.log(`El resultado de tu numero elevado al cuadrado es: ${cuadradoDeUnNumero(a)}`);


/*encontrar el promedio de tres numeros dados. */
const promedioDeTresNumeros = (num1, num2, num3) => {

    let sumaAyB = sumar(num1, num2)
    let sumaTotal = sumar(sumaAyB, num3)
    let promedio = dividir(sumaTotal, 3)

    return promedio
}
console.log(`El promedio de estos tres números es: ${promedioDeTresNumeros(a, b, c)}`);


/*Calcular el porcentaje de dis numeros dados.*/
const calcularPorcentaje = (num1, num2) => {
    let a = multiplicar(num1, num2)
    let porcentaje = dividir(a, 100)
    return porcentaje
}
console.log(`El porcentaje de estos dos números es: ${calcularPorcentaje(a, b)}`);


/*Generador de porcentaje.*/
const generadorPorcentaje = (num1, num2) => {
    let a = dividir(num1, num2)
    let generado = multiplicar(a, 100)
    return generado
}
console.log(`El generador de porcentaje nos da: ${generadorPorcentaje(a, b)}`);