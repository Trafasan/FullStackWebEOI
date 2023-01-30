'use strict';

/* Web que pida un String al usuario y cuente el número de vocales. El String se imprime de forma invertida*/

let texto = prompt("Introduzca una cadena de texto:");
let nVocales = parseInt(0);
let textInvertido = "";
let letra;
for (let i=texto.length-1; i>=0; i--) {
    letra = texto.charAt(i);
    if (letra.search(/[aeiouAEIOU]/) != -1) nVocales++;
    // .search() devuelve la posición de la primera letra encontrada con los parámetros buscados
    textInvertido += letra;
}
document.write("<p>Número de vocales: "+nVocales+"</p><p>El texto invertido es: "+textInvertido+"</p>");