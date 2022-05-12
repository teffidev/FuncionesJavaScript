/*Recibe la valoracion de una pelicula y entrega feedback.*/
const prompt = require("prompt-sync")({sigint: true});

const calificacion = x => {
    x = prompt('Dinos que tal te pareció esta pelicula: ')

    switch(x){
        case "muy mala": 
        console.log(`Calificaste esta pelicula como: ${x} ¡Lo sentimos mucho!`);
        break;
        case "mala": 
        console.log(`Calificaste esta pelicula como: ${x} ¡Lo sentimos mucho!`);
        break;
        case "mediocre": 
        console.log(`Calificaste esta pelicula como: ${x} ¡Lo sentimos mucho!`);
        break;
        case "buena": 
        console.log(`Calificaste la película como: ${x} ¡Nos alegra mucho!`);
        break;
        case "muy buena": 
        console.log(`Calificaste la película como: ${x} ¡Nos alegra mucho!`);
        break;
        default: 
        console.log('¡Ingresaste un valor invalido!');
        break;
    }
}
console.log(calificacion());