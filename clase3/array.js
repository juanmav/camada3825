let numeros = [2,60,4,98,6];

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}
numeros.forEach(n => console.log(n));

let doble = [];
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
    doble.push(numeros[i] * 2);
}
console.log(doble);

let doble2 = numeros.map( n => n * 2);

console.log(doble2);
console.log(numeros);

let clonado = numeros.map( n => n);


/*let accumulador = 0;
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
    accumulador = accumulador + numeros[i];
}
console.log(accumulador);*/

let resultado = numeros.reduce((acc, n) => acc + n, 0);

let resultado3 = numeros.map(n => n * 3).reduce((acc, n)=> acc +n, 0);

console.log(resultado3);

let sumaloca = 3 + 4 + 5 + 'hola' + 10;

console.log(sumaloca);

