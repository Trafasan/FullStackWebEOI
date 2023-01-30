'use strict';

/* Web que pida 2 números al usuario, decida cuál es mayor de los dos y cree tantos párrafos como el mayor de los dos.
El texto de los párrafos lo introducirá el usuario. */
// Shift+Alt+A para comentarios en bloque

let n1 = parseInt(prompt("Introduzca el primer número:"));
let n2 = parseInt(prompt("Introduzca el segundo número:"));
// Se hace la conversión ya que lo reconoce de base como String
let nMayor = (n1>=n2) ? n1 : n2;
let texto;
for (let i=1; i<=nMayor; i++) {
    texto = prompt("Introduce el texto del párrafo nuevo ("+i+"/"+nMayor+"):");
    document.write("<p>"+texto+"</p>");
}