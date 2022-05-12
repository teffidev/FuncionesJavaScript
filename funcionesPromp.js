const prompt = require("prompt-sync")({ sigint: true });

//Mostrar mensaje:
let escribir = prompt("Escriba un mensaje: ")

let muestraMensaje = (escribir) => {
    return escribir
}
muestraMensaje(escribir)
let mensaje = muestraMensaje(escribir)
console.log('----Este es tu mensaje----');
console.log(mensaje);


//Saludar por el nombre:
let nombre= prompt("¿Cómo te llamas?: ")

let saludar = (nombre) => {
    return `Hola ${nombre}!`
}
let saludo = saludar(nombre)
console.log('---Aqui esta tu saludo:---');
console.log(saludo);


//Suma de 2 números ingresados:
/*El parseInt(prompt("Ingrese número: ")) convierte el 
valor en tipo numerico. Pero para no usar el parseInt, 
utilizamos un más ( + ) antes del propmt y 
esto convierte el valor en numero.*/
let num1 = (+prompt("Ingresa un numero: "))   
let num2 = (+prompt("Ingresa otro numero: "))

let sumarDos = (num1, num2) => {
    return `La suma de ${num1} + ${num2} es de= ${num1 + num2}`
}
console.log('---Esta es la suma de los números ingresados:---');
console.log(sumarDos(num1, num2));


//Descubrir edad por el año de nacimiento:
let yearNac = (+prompt("Ingresa tu año de nacimiento: "))
let yearActual = 2022
let edadActual = yearNac => {
    let edad = yearActual-yearNac
    return `Tienes ${edad} años!`
}
console.log('---Esta es la edad del usuario:---');
console.log(edadActual(yearNac));


//Adivina el numero con la función Math.random()
let guess = (+prompt("Adivina cuál es el número: "))

let numAleatorio = (num1) => {
    let aleatorio = Math.floor(Math.random()*11)
    // return num1 === aleatorio ? `Felicitaciones encontraste el numero ${aleatorio}` : `Lo siento, intenta nuevamente, el numero era ${aleatorio}`
    if(num1 === aleatorio){
        return `Felicitaciones encontraste el numero ${aleatorio}`
    }else{
        return `Lo siento, intenta nuevamente, el numero era ${aleatorio}`
    }
}
console.log('---Este es el resultado del numero ingresado:---');
console.log(numAleatorio(guess));