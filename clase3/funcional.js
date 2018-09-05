function sumar(a, b) {
    return a + b;
}

console.log(sumar(3,2));

/****
 *
 * ........ mucha logica pasan muchas cosas
 *
 * */

console.log(sumar(3,2));


let constante = 10;

function sumar2(a, b) {
    return a + b + constante;
}

console.log(sumar2(3,2));
constante = 20;
console.log(sumar2(3,2));

function sumarComposite(a){
    return function(b){
        return a + b
    }
}

let sumaA = sumarComposite(3);

console.log(sumaA(2));

let resultado = sumarComposite(5)(5);

