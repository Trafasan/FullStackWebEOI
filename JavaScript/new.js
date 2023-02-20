'use strict'; // Esto te obliga a declarar las variables

console.log("Hola mundo");
// console.error("Algo ha fallado");
// alert("Probando alert");
let n = prompt("Introduzca un número:"); // Esta declaración evita el Hoisting
// El Hoisting es cuando Javascript mueve todas las declaraciones de las variables al principio del ámbito actual
// El valor de la variable si no la definimos es undefined
alert("El número introducido es "+n+'.');


for (let i=0; i<4; i++){
    if (i%2==0) document.write("<p>Párrafo par</p>");
    else document.write("<p>Párrafo impar</p>");
}