'use strict';

window.onload = function() {
    let primerParrafo = document.getElementsByTagName("p")[0];
    // Número de enlaces de la página
    let mostrarEnlaces = document.getElementsByTagName("a");
    primerParrafo.innerHTML="Número de enlaces en la página: "+mostrarEnlaces.length;
    // Dirección del penúltimo enlace
    let penultimoEnlace = mostrarEnlaces[mostrarEnlaces.length-2];
    primerParrafo.innerHTML+="<br>Penúltimo enlace: "+penultimoEnlace;
    // Número de enlaces que apuntan a http://prueba/
    let nEnlaces = 0;
    for(let enlace of mostrarEnlaces) if(enlace.href === "http://prueba/") nEnlaces++;
    primerParrafo.innerHTML+="<br>Número de enlaces que apuntan a http://prueba/: "+nEnlaces;
    // Número de enlaces del tercer párrafo
    let enlacesTercerParrafo = document.getElementsByTagName("p")[3].getElementsByTagName("a");
    primerParrafo.innerHTML+="<br>Número de enlaces en el tercer párrafo: "+enlacesTercerParrafo.length;
}