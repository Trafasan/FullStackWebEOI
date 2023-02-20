'use strict';

/*
1) Pedir al usuario cantidad
2) Crear un desplegable con tantos option como el numero que ha dado.
    Elemento 1 ... Elemento N
3) Crear tanto RADIOBUTTON como elemento tambien
4) Si cambias el valor del radio, se cambie el desplegable y viceversa */

let nElementos = prompt("Introduzca el número de elementos:");

function insertarDesplegable(nElementos) {
    let parrafo = document.createElement("p");
    let desplegable = document.createElement("label");
    let textoDesplegable = document.createTextNode("Desplegable creado por DOM: ");
    let selecciones = document.createElement("select");
    selecciones.setAttribute("name", "elementos");
    let opcionVacia = document.createElement("option");
    let textoOpcionVacia = document.createTextNode("-Elementos-");
    opcionVacia.appendChild(textoOpcionVacia);
    opcionVacia.setAttribute("value", "");
    opcionVacia.hidden = true;
    selecciones.appendChild(opcionVacia);
    for (let i=1; i<=nElementos; i++) {
        let opcion = document.createElement("option");
        let textoOpcion = document.createTextNode("Elemento "+i);
        opcion.appendChild(textoOpcion);
        opcion.setAttribute("value", i);
        selecciones.appendChild(opcion);
    }
    desplegable.appendChild(textoDesplegable);
    desplegable.appendChild(selecciones);
    parrafo.appendChild(desplegable);
    document.body.appendChild(parrafo);
}

function insertarRadio(nElementos) {
    let contenido = document.createElement("div");
    let enunciado = document.createElement("label");
    let textoEnunciado = document.createTextNode("Opciones creadas por DOM: ");
    enunciado.appendChild(textoEnunciado);
    contenido.appendChild(enunciado);
    for (let i=1; i<=nElementos; i++) {
        let radio = document.createElement("div");
        let seleccion = document.createElement("label");
        let textoOpcion = document.createTextNode("Elemento "+i);
        let input = document.createElement("input");
        input.setAttribute("type", "radio")
        input.setAttribute("name", "elementos")
        input.setAttribute("value", i);
        seleccion.appendChild(input);
        seleccion.appendChild(textoOpcion);
        radio.appendChild(seleccion);
        contenido.appendChild(radio);
    }
    document.body.appendChild(contenido);
}
window.onload = function() {
    insertarDesplegable(nElementos);
    insertarRadio(nElementos);
}