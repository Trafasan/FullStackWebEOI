'use strict';

/* Solicita 2 números al usuario y debes devolver lo siguiente:
Cantidad de pares
Cantidad de Impares
Cantidad de positivos
Cantidad de negativos
Muestra todos los números que hay entre uno y otro, contando ambos.
Devuelve la suma de todos
Devuelve el factorial del mayor de los números */
function pedirValidarN(ordenN) {
    let n;
    do {
        n = +prompt("Introduzca el "+ordenN+" número: ");
        if (isNaN(n) || n == "") alert ("El dato introducido no es válido.");
    }  while (isNaN(n) || n == "");
    return n;
}

let n1 = pedirValidarN("primer");
let n2 = pedirValidarN("segundo");

let lista = "";
let nPar = parseInt(0);
let nImpar = parseInt(0);
let nPos = parseInt(0);
let nNeg = parseInt(0);
let suma = parseInt(0);
let factorial = parseInt(1);

let nMayor = Math.max(n1, n2);
let nMenor = Math.min(n1, n2);
let comienzo = (nMenor<1) ? nMenor : 1;

for (let i = comienzo; i<=nMayor; i++) {
    if (i>=nMenor) {
        lista += " " + i;
        (i%2 == 0) ? nPar++ : nImpar++;
        (i>=0) ? nPos++ : nNeg++;
        suma += i;
    }
    if (i>0) factorial *= i;
}

document.write("<p>Lista de números:"+lista+"</p>")
document.write("<p>Cantidad de pares: "+nPar+"</p>")
document.write("<p>Cantidad de impares: "+nImpar+"</p>")
document.write("<p>Cantidad de positivos: "+nPos+"</p>")
document.write("<p>Cantidad de negativos: "+nNeg+"</p>")
document.write("<p>Suma de todos los números: "+suma+"</p>")
document.write((nMayor<0) ? "<p>No se puede calcular el factorial de un número negativo</p>" : "<p>Factorial de "+nMayor+": "+factorial+"</p>")