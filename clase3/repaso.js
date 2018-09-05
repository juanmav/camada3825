var nombre = 'Pepito';
console.log(nombre);
console.log(nombre.toUpperCase());
/**
 * Mucha logica.
 * ........
 * */
var nombre = 'Josesito';
/**
 * ......
 * */
console.log(nombre);

let lastname = 'Rodriguez';

/**
 * .....
 * */

// let lastname = 'Rodriguez'; // Esto falla por duplicado.

let hijos = [];

if (true){
    let edad = 10;
    console.log(edad);
    console.log(hijos);
}

let edad = 20;

console.log(edad);

// Sync / Async

console.log('1. Primer paso.');

setTimeout(function () {
    console.log('2. Segundo paso');
}, 1000);

console.log('3. Tercer paso');

let persona = {
    name: 'pepito',
    lastname: 'Rodriguez',
    decimeTuNombre: function () {
        return this.name;
    }
};


let mensaje = 'Mi nombre es ' + persona.name + ' y mi apellido es: ' + persona.lastname + '\n';
let mensaje2 = `Mi nombre es ${persona.name} y apellido es: ${persona.lastname}`;

console.log(mensaje);
console.log(mensaje2);

function getTemplate(p){
    return `Mi nombre es ${p.name} y apellido es: ${p.lastname}
    Mi nombre es ${p.name} y apellido es: ${p.lastname}
    Mi nombre es ${p.name} y apellido es: ${p.lastname}
    Mi nombre es ${p.name} y apellido es: ${p.lastname}
    Mi nombre es ${p.name} y apellido es: ${p.lastname}
    `
}

let mensaje3 = getTemplate(persona);

console.log(mensaje3);