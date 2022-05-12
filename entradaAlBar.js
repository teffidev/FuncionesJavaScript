const prompt = require("prompt-sync")({ sigint: true });

const edad = prompt('¿Cuál es tu edad?: ')

if(edad > 0 && edad < 18) { /*menor de edad*/
    console.log("No puede pasar al bar.")
    } 
    else if (edad <= 0) {/*edad invalida*/
        console.log("Error, edad inválida. Por favor ingrese un número válido.")
        } 
        else if (edad >= 18 && edad < 21 ){ /*entrar sin beber alcohol*/
            console.log("Puede pasar al bar, pero no puede tomar alcohol.")
            esImpar (edad)
        }
            else if (edad == 21){/*bienvenida a la adultez*/
                console.log("bienvenido, felicitaciones por haber llegado a la mayoría de edad.")   
                esImpar (edad)
            }
                else{
                    console.log("Puede pasar al bar y tomar alcohol.")
                    esImpar (edad)
                }

function esImpar (edad) { 
    if (edad % 2 != 0) {
        console.log("Dato curioso: ¡Sabias que tu edad es Impar!")
        }   
}