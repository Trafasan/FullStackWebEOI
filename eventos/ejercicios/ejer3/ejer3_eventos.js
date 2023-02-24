'use strict';

/*
1) Pedir al usuario cantidad
2) Crear un desplegable con tantos option como el numero que ha dado.
    Elemento 1 ... Elemento N
3) Crear tanto RADIOBUTTON como elemento tambien
4) Si cambias el valor del radio, se cambie el desplegable y viceversa */

function equipararOpcionesSelect() {
    document.querySelector('select').value = this.value;
}

function equipararOpcionesRadio() {
    document.getElementsByName('opciones')[this.value-1].checked = true;
}

function insertarDesplegable(nElementos) {
    let parrafo = document.createElement("p");
    let desplegable = document.createElement("label");
    let selecciones = document.createElement("select");
    selecciones.name = "desplegable";
    let opcionVacia = document.createElement("option");
    opcionVacia.appendChild(document.createTextNode("-Elementos-"));
    opcionVacia.value = "";
    opcionVacia.hidden = true;
    selecciones.appendChild(opcionVacia);
    let opcion;
    for (let i=1; i<=nElementos; i++) {
        opcion = document.createElement("option");
        opcion.appendChild(document.createTextNode("Elemento "+i));
        opcion.value = i;
        selecciones.appendChild(opcion);
    }
    selecciones.onchange = equipararOpcionesRadio;
    desplegable.appendChild(document.createTextNode("Desplegable creado por DOM: "));
    desplegable.appendChild(selecciones);
    parrafo.appendChild(desplegable);
    document.body.appendChild(parrafo);
}

function insertarRadio(nElementos) {
    let contenido = document.createElement("div");
    let enunciado = document.createElement("label");
    enunciado.appendChild(document.createTextNode("Opciones creadas por DOM: "));
    contenido.appendChild(enunciado);
    contenido.style.display = "grid";
    let seleccion, input;
    for (let i=1; i<=nElementos; i++) {
        seleccion = document.createElement("label");
        input = document.createElement("input");
        input.type = "radio"
        input.name = "opciones";
        input.value = i;
        input.onchange = equipararOpcionesSelect;
        seleccion.appendChild(input);
        seleccion.appendChild(document.createTextNode(" Elemento "+i));
        contenido.appendChild(seleccion);
    }
    document.body.appendChild(contenido);
}

window.onload = function() {
    let nElementos;
    do{
        nElementos = +prompt("Introduzca el número de elementos:");
        if (isNaN(nElementos)) alert("El dato introducido no es un número");
        else if (nElementos<1) alert("El número introducido no es válido");
    } while (isNaN(nElementos)||nElementos<0);
    insertarDesplegable(nElementos);
    insertarRadio(nElementos);
}