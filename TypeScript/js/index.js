"use strict";
console.log("Hola TypeScript");
let x = 3;
console.log("x");
let y = 7;
let cadena = "Hola, ¿qué tal?";
console.log(cadena);
let arrayIndefinido = [];
arrayIndefinido[0] = 2;
arrayIndefinido[1] = "Hola";
arrayIndefinido[3] = true;
console.log(arrayIndefinido);
let arrayNumeros = [3, 4, 56, 43, 1];
// arrayNumeros[2]="Hola"; da error en TS
let sumar = (x, y, z) => x + y + ((z == undefined) ? 0 : z);
// Para indicar más tipos se utiliza |
document.write("<p>Suma de dos elementos: " + sumar(x, y) +
    "<br>Suma de tres elementos: " + sumar(x, y, 9) + "</p>");
let cuerpo = document.body;
let elemento = document.getElementById("boton");
