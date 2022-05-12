const prompt = require("prompt-sync")({ sigint: true });

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
console.log(numAleatorio(guess));