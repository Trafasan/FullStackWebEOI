'use strict';

/* Si pulsamos el titulo eliminar el ultimo parrafo
    1) Acceder al nodo titulo
    2) Añadir evento click al titulo
    3) Desarrollar funcion que elimine el ultimo parrafo
        3.1) Acceder al ultimo parrafo
        3.2) Eliminar ese ultimo parrafo usando removeChild
    4) Si no hay párrafo dar un mensaje de error*/

function borrarParrafo() {
    let parrafos = document.getElementsByTagName("p");
    if (parrafos.length == 0) alert ("No existen párrafos a eliminar");
    else document.body.removeChild(parrafos[parrafos.length-1]);
}

function insertarParrafo() {
    let parrafos = document.getElementsByTagName("p");
    let parrafo = document.createElement("p");
    let texto = document.createTextNode("PÁRRAFO "+(parrafos.length+1));
    parrafo.appendChild(texto);
    parrafo.onclick = insertarParrafo;
    document.body.appendChild(parrafo);
}

window.onload = function() {
    let titulo = document.querySelector("h1");
    titulo.onclick = borrarParrafo;
    
    let parrafos = document.getElementsByTagName("p");
    for (let elemento of parrafos) elemento.addEventListener("click", insertarParrafo);
}