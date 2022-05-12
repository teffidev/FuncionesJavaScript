/*Crear una función que muestre todos los números 
de la secuencia de fibonacci hasta el valor ingresado
como parametro.*/
let numeroFibonacci = number => {
    let anterior = 0
    let siguiente = 1
    let fibonacci = 0

    for (let i = 0; i <= number; i++) {
        if (fibonacci <= number) {
            console.log(anterior)
            fibonacci = anterior + siguiente
            anterior = siguiente
            siguiente = fibonacci
        }    
    }
}
let fibonacci = numeroFibonacci(21)
console.log(fibonacci)