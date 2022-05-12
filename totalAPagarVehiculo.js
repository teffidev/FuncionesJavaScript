const prompt = require("prompt-sync")({sigint: true});

const tipoVehiculo = prompt('Ingrese la opción que corresponda (coche, autobus o moto): ')
const litrosConsumidos = (+prompt('Ingrese cantidad de litros: '))
let precioPorLitro, precioFinal;
let costoAdicional1 = 50
let costoAdicional2 = 25

const totalAPagar = (tipoVehiculo, litrosConsumidos) => {
    if (tipoVehiculo === 'coche') {
        console.log('El precio por litro es de $86')
        precioPorLitro = 86
    }else if (tipoVehiculo === 'moto') {
        console.log('El precio por litro es de $70')
        precioPorLitro = 70
    }else if (tipoVehiculo === 'autobus') {
        console.log('El precio por litro es de $55')
        precioPorLitro = 55
    }
    if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
        console.log('Se añaden $50 al total a pagar')
        precioFinal = (precioPorLitro * litrosConsumidos) + costoAdicional1
    }else if (litrosConsumidos > 25) {
        console.log('Se añaden $25 al total a pagar')
        precioFinal = (precioPorLitro * litrosConsumidos) + costoAdicional2

    }
}
totalAPagar(tipoVehiculo, litrosConsumidos)
console.log(`El total a pagar es de: ${precioFinal}`);