'use strict';

/* Crea un script (usando al menos 1 función) en el que se le pida al usuario 2 datos:
•El primero será dos números del 1 al 10 (debes dar error en otro caso)
•El segundo será el modo de visualización: LISTA , PARRAFO o TABLA (debe dar error si elige otra cosa)
•El programa mostrará la tabla de multiplicar del número más pequeño, llegando hasta el número más grande
•Ojo, tendrás que tener en cuenta que el usuario puede ponerte el segundo número más pequeño que el primero. */

function elegirImpresion(nMin, nMax, tipo) {
    switch (tipo){
        case "LISTA":
            impresionEstructuraBasica(nMin, nMax, "ul", "li");
            break;
        case "PARRAFO":
            impresionEstructuraBasica(nMin, nMax, "div", "p");
            break;
        case "TABLA":
            impresionTabla(nMin, nMax);
            break;
        case "DESPLEGABLE":
            impresionDesplegable(nMin, nMax);
            break;
        default: alert ("Hasta pronto :)");
    }
}
function impresionEstructuraBasica(nMin, nMax, item1, item2) {
    document.write("<"+item1+">");
    for (let i=1; i<=nMax; i++)  document.write("<"+item2+">"+nMin+"x"+i+"="+(nMin*i)+"</"+item2+">");
    document.write("</"+item1+">");
}
function impresionTabla(nMin, nMax) {
    document.write("<table>");
    for (let i=1; i<=nMax; i++)  document.write("<tr><td>"+nMin+"x"+i+"</td><td>=</td><td>"+(nMin*i)+"</td></tr>");
    document.write("</table>");
}
function impresionDesplegable(nMin, nMax) {
    document.write("<p><label>Tabla de multiplicar del "+nMin+": <select name=\"multiplicaciones\">");
    document.write("<option value=\"\" hidden>&nbsp</option>");
    for (let i=1; i<=nMax; i++)  document.write("<option value=\""+i+"\">"+nMin+"x"+i+"="+(nMin*i)+"</option>");
    document.write("</select></label></p>");
}

function pedirValidarTipo(texto) {
    let tipo;
    do {
        tipo = prompt(texto).toUpperCase();
        if (tipo != "LISTA" && tipo != "PARRAFO" && tipo != "TABLA" && tipo != "DESPLEGABLE" && tipo != "SALIR") alert ("No se ha reconocido el modo introducido.");
    }  while (tipo != "LISTA" && tipo != "PARRAFO" && tipo != "TABLA" && tipo != "DESPLEGABLE" && tipo != "SALIR");
    return tipo;
}

function pedirValidarNum(texto) {
    let n;
    do {
        n = +prompt(texto);
        if (isNaN(n) || n == "") alert ("El dato introducido no es válido.");
        if (n<1 || n>10) alert ("El número introducido no está en el rango establecido")
    }  while (isNaN(n) || n == "" || n<1 || n>10);
    return n;
}

let n1 = pedirValidarNum("Introduzca el primer número (entre el 1 y el 10):");
let n2 = pedirValidarNum("Introduzca el segundo número (entre el 1 y el 10):");
let nMin = Math.min(n1, n2);
let nMax = Math.max(n1, n2);
let tipo;

document.head.innerHTML += "<link rel=\"stylesheet\" href=\"ejer2_funciones.css\"></link>"; // Esto añade al head los estilos de la página
do{
    tipo = pedirValidarTipo("Introduzca el modo de visualización (LISTA, PARRAFO, TABLA, DESPLEGABLE, SALIR): ");
    elegirImpresion(nMin, nMax, tipo);
} while (tipo != "SALIR")