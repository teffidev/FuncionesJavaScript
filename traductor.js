/*Traducir 5 palabras en el diccionario*/
const prompt = require("prompt-sync")({sigint: true});

const traductor = () => {
    let palabra = prompt('Ingresa la palabra que deseas traducir: ')

    switch (palabra) {
        case "casa": 
            console.log("house");
        break;
        case "perro": 
            console.log("dog");
        break;
        case "pelota": 
            console.log("ball");
        break;
        case "arbol": 
            console.log("tree");
        break;
        case "genio": 
            console.log("genius");
        break;
        default: 
            console.log("La palabra ingresada es incorrecta");
        break;
    }
}
console.log(traductor());