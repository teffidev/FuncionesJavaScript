/*Ayuda a decidir si debe o no abrirse un paracaidas*/

const abrirParacaidas = (velocidad, altura) => {

    if (velocidad < 1000) {
        if (altura >= 2000 && velocidad < 3000) {
            console.log('Puedes abrir el paracaidas');
        }else{
            console.log('No puedes abrir el paracaidas');
        }
    }else{
        console.log('Alerta no abrir paracaidas');
    }
}
let abrir = abrirParacaidas(900, 2000)
console.log(abrir);