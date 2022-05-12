const prompt = require("prompt-sync")({sigint: true});

const tipoSandwich = prompt('Ingrese cual tipo de Sanduche desea "pollo por $150", "carne por $200" o "vegetariano por $100": ')
const tipoPan = prompt('Ingrese cual es el tipo de tipoPan que desea "blanco con oregano y parmesano por $50", "negro con avena por $60" o "sin gluten por $75": ')
const queso = prompt('Ingrese queso por $20 si es de su preferencia: ')
const tomate = prompt('Ingrese tomate por $10 si es de su preferencia: ')
const lechuga = prompt('Ingrese lechuga por $15 si es de su preferencia: ')
const cebolla = prompt('Ingrese cebolla por $15 si es de su preferencia: ')
const mayonesa = prompt('Ingrese mayonesa por $5 si es de su preferencia: ')
const mostaza = prompt('Ingrese mostaza por $5 si es de su preferencia: ')

let sandwich = 0
let pan = 0
let adicional = 0
let totalSandwich;


const calcularCosto = (tipoSandwich, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    if (tipoSandwich === 'pollo') {
        sandwich = 150        
    }else if (tipoSandwich === 'carne') {
        sandwich = 200        
    }else if (tipoSandwich === 'vegetariano') {
        sandwich = 100        
    }else
    console.log('No tenemos ese tipo Sandwich');
    if (tipoPan === 'blanco') {
        pan = 50    
    }else if (tipoPan === 'negro') {
        pan = 60        
    }else if (tipoPan === 'sin gluten') {
        pan = 75
    }else
    console.log('No tenemos ese tipo de pan');
    queso ? adicional = adicional + 20: "";
    tomate ? adicional = adicional + 15: "";
    lechuga ? adicional = adicional + 10: "";
    cebolla ? adicional = adicional + 15: "";
    mayonesa ? adicional = adicional + 5: "";
    mostaza ? adicional = adicional + 5: "";
    totalSandwich = sandwich + pan + adicional
    console.log(`El total a pagar es de: ${totalSandwich}`);
}
console.log(calcularCosto(tipoSandwich, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza));