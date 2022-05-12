const prompt = require("prompt-sync")({ sigint: true });

//Pulgadas a Centimetros
let conversion = dato => dato * 2.54

let datoUsuario = prompt('Ingrese número de pulgadas: ')
console.log(`Los centimetros de esas pulgadas: ${conversion(datoUsuario)}`);


//String a URL
let texto = x => `http//:www.${x}.com`

let urlUsuario = prompt('Ingrese el nombre de dominio que quiere usar: ')
console.log(texto(urlUsuario));


//Frase con signo de admiración
let frase = texto => `¡${texto}!`

let fraseUsuario = prompt('Ingrese una frase: ')
console.log(`Frase con signos de admiración: ${frase(fraseUsuario)}`);


//Conversor de la edad de los perros
let edadPerro = y => y * 7

let edadHumano = prompt('Ingresa la edad de una persona: ')
console.log(`Esta edad equivale a ${edadPerro(edadHumano)} años perrunos`);


//Valor hora de trabajo
let valorHora = sueldo => sueldo / 40

let sueldoMensual = prompt('Ingrese su sueldo mensual: ')
console.log(`El valor que te pagan por hora es: ${valorHora(sueldoMensual)}`);


//Calculador IMC
let calculadorImc = (altura, peso) => peso / (altura * altura)

let alturaMetros = prompt('Ingrese su altura en metros: ')
let pesoKg = prompt('Ingrese su peso en Kilogramos: ')
console.log(`Tu IMC es de: ${calculadorImc(alturaMetros, pesoKg)}`);


//Pasar de minuscula a mayuscula
let pasarAMayuscula = text => text.toUpperCase()

let textoMinusculas = prompt('Ingrese un texto en minusculas: ')
console.log(`Tu texto en Mayusculas se ve así: ${pasarAMayuscula(textoMinusculas)}`);


//Que tipo de dato es el parametro
let valor = true
let tipoDeDato = x => typeof(valor)

console.log(tipoDeDato());

//Otra forma
let = tipDato = valor => typeof valor

console.log(tipDato(false));
console.log(tipDato(undefined));
console.log(tipDato("false"));
console.log(tipDato(15));


//Pasamos el radio y nos devuelve la circunferencia
let circunferencia = radio => 2 * Math.PI * radio

let radio = prompt('Ingresa el valor del radio: ')
console.log(`El valor de la circunferencia es: ${circunferencia(radio)}`);