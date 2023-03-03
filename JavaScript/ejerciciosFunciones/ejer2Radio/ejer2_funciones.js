'use strict';

/*1)
    TABLA DE MULTIPLICAR (TEXT):
    CANTIDAD DE FILAS (TEXT):
    RADIO PONEIS LOS 4 (TABLA, LISTA, PARRAFOS, DESPLEGABLE)
    BOTON SUBMIT
    LOCALIZACION: ENCIMA DEL FORMULARIO
    VALIDAR:
    TODOS RELLENOS -> VALIDARLO EN EL SUBMIT
    MULTIPLICAR Y FILAS SON NUMEROS -> VALIDAR CON SETCUSTOMVALIDITY
    NIVEL PRO) HACER EL FORMULARIO CON EL DOM
2) SI CAMBIAS EL RADIO AUTOMATICAMENTE TAMBIEN SE CAMBIE A LA NUEVA ESTRUCTURA
3) UN BOTON AÑADIR. AÑADA 1 NUEVO A LA ESTRUCTURA.*/

let numMax = (f) => Math.max(f.n1.value, f.n2.value);
let numMin = (f) => Math.min(f.n1.value, f.n2.value);

function contadorCreacion(nMax) {
    switch (document.getElementById("contenido").firstElementChild.nodeName) {
        case "UL": return document.querySelectorAll('#contenido li').length-nMax;
        case "DIV": return document.querySelectorAll('#contenido p').length-nMax;
        case "TABLE": return document.querySelectorAll('#contenido tr').length-nMax;
        case "P": return document.querySelectorAll('#contenido option').length-nMax-1;
    }
}

function crearLista(nMin, nMax, contador) {
    let lista = document.createElement("ul");
    lista.onclick = function() {
        contador = contadorCreacion(nMax);
        cambiarElemento(contador);
    }
    let elemento;
    for (let i=1; i<=nMax+contador; i++) {
        elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode(nMin+"x"+i+"="+(nMin*i)));
        lista.appendChild(elemento);
    }
    document.getElementById("contenido").appendChild(lista);
}
function crearParrafo(nMin, nMax, contador) {
    let div = document.createElement("div");
    div.onclick = function() {
        let contador = contadorCreacion(nMax);
        cambiarElemento(contador);
    }
    let parrafo;
    for (let i=1; i<=nMax+contador; i++) {
        parrafo = document.createElement("p");
        parrafo.appendChild(document.createTextNode(nMin+"x"+i+"="+(nMin*i)));
        div.appendChild(parrafo);
    }
    document.getElementById("contenido").appendChild(div);
}
function crearTabla(nMin, nMax, contador) {
    let tabla = document.createElement("table");
    tabla.onclick = function() {
        let contador = contadorCreacion(nMax);
        cambiarElemento(contador);
    }
    let fila, mult, igual, producto;
    for (let i=1; i<=nMax+contador; i++) {
        fila = document.createElement("tr");
        mult = document.createElement("td");
        mult.appendChild(document.createTextNode(nMin+"x"+i));
        fila.appendChild(mult);
        igual = document.createElement("td");
        igual.appendChild(document.createTextNode("="));
        fila.appendChild(igual);
        producto = document.createElement("td");
        producto.appendChild(document.createTextNode(nMin*i));
        fila.appendChild(producto);
        tabla.appendChild(fila);
    }
    document.getElementById("contenido").appendChild(tabla);
    
}
function crearDesplegable(nMin, nMax, contador) {
    let parrafo = document.createElement("p");
    let label = document.createElement("label");
    let select = document.createElement("select");
    select.onchange = function() {
        let contador = contadorCreacion(nMax);
        cambiarElemento(contador);
    }
    select.setAttribute("name", "multiplicaciones");
    let opcionVacia = document.createElement("option");
    opcionVacia.hidden = true;
    select.appendChild(opcionVacia);
    let opcion;
    for (let i=1; i<=nMax+contador; i++) {
        opcion = document.createElement("option");
        opcion.setAttribute("value", i);
        opcion.appendChild(document.createTextNode(nMin+"x"+i+"="+(nMin*i)));
        select.appendChild(opcion);
    }
    label.appendChild(select);
    parrafo.appendChild(label);
    document.getElementById("contenido").appendChild(parrafo);
}
function crearTablaMult(f, contador) {
    let nMin = numMin(f);
    let nMax = numMax(f);
    switch (f.opciones.value) {
        case "lista":
            crearLista(nMin, nMax, contador);
            break;
        case "parrafo":
            crearParrafo(nMin, nMax, contador);
            break;
        case "tabla":
            crearTabla(nMin, nMax, contador);
            break;
        case "desplegable":
            crearDesplegable(nMin, nMax, contador);
            break;
    }
    document.querySelector('button[name="crearTabla"]').setAttribute('hidden', "true");
    document.querySelector('button[name="anyadir"]').removeAttribute('hidden');
    document.querySelectorAll('.numero')[0].setAttribute('hidden', "true");
    document.querySelectorAll('.numero')[1].setAttribute('hidden', "true");
}

function anyadirLista(nMin, nMax) {
    let elemento = document.createElement("li");
    elemento.appendChild(document.createTextNode(nMin+"x"+nMax+"="+(nMin*nMax)));
    document.querySelector("ul").appendChild(elemento);
}
function anyadirParrafo(nMin, nMax) {
    let parrafo = document.createElement("p");
    parrafo.appendChild(document.createTextNode(nMin+"x"+nMax+"="+(nMin*nMax)));
    document.querySelector("#contenido>div").appendChild(parrafo);
}
function anyadirTabla(nMin, nMax) {
    let fila = document.createElement("tr");
    let mult = document.createElement("td");
    mult.appendChild(document.createTextNode(nMin+"x"+nMax));
    fila.appendChild(mult);
    let igual = document.createElement("td");
    igual.appendChild(document.createTextNode("="));
    fila.appendChild(igual);
    let producto = document.createElement("td");
    producto.appendChild(document.createTextNode(nMin*nMax));
    fila.appendChild(producto);
    document.querySelector("table").appendChild(fila);    
}
function anyadirDesplegable(nMin, nMax) {
    let opcion = document.createElement("option");
    opcion.setAttribute("value", nMax);
    opcion.appendChild(document.createTextNode(nMin+"x"+nMax+"="+(nMin*nMax)));
    document.querySelector("select").appendChild(opcion);
}
function anyadirElemento(contador) {
    let f=document.form;
    let nMin = numMin(f);
    let nMax = numMax(f)+contador;
    switch (f.opciones.value) {
        case "lista":
            anyadirLista(nMin, nMax);
            break;
        case "parrafo":
            anyadirParrafo(nMin, nMax);
            break;
        case "tabla":
            anyadirTabla(nMin, nMax);
            break;
        case "desplegable":
            anyadirDesplegable(nMin, nMax);
            break;
    }
}

function cambiarElemento(contador) {
    let f=document.form;
    let nMin = numMin(f);
    let nMax = numMax(f);
    document.getElementById("contenido").removeChild(document.getElementById("contenido").firstElementChild);
    switch (document.getElementById("contenido").firstElementChild.nodeName) {
        case "UL": /*La tabla está en formato Lista*/
            crearParrafo(nMin, nMax, contador);
            document.querySelector('input[value="parrafo"]').checked = true
            break;
        case "DIV": /*La tabla está en formato Párrafo*/
            crearTabla(nMin, nMax, contador);
            document.querySelector('input[value="tabla"]').checked = true
            break;
        case "TABLE": /*La tabla está en formato Tabla*/
            crearDesplegable(nMin, nMax, contador);
            document.querySelector('input[value="desplegable"]').checked = true
            break;
        case "P": /*La tabla está en formato Desplegable*/
            crearLista(nMin, nMax, contador);
            document.querySelector('input[value="lista"]').checked = true
            break;
    }
}

function reemplazarElemento(contador) {
    let f=document.form;
    let nMin = numMin(f);
    let nMax = numMax(f);
    document.getElementById("contenido").removeChild(document.getElementById("contenido").firstElementChild);
    switch (f.opciones.value) {
        case "lista":
            crearLista(nMin, nMax, contador);
            break;
        case "parrafo":
            crearParrafo(nMin, nMax, contador);
            break;
        case "tabla":
            crearTabla(nMin, nMax, contador);
            break;
        case "desplegable":
            crearDesplegable(nMin, nMax, contador);
            break;
    }
}

function validarNumero(input) {
    if(input.value=="") input.setCustomValidity("Error\nEl campo no puede estar vacío.");
    else if (isNaN(input.value)) input.setCustomValidity("Error\nEl campo debe ser un número.");
    else if(input.value<1||input.value>10) input.setCustomValidity("Error\nEl número debe ser encontrarse en el rango 1-10.");
    else input.setCustomValidity("");
}

window.onload = function() {
    let contador = 0;
    let f=document.form;
    f.n1.setCustomValidity("Error\nEl campo no puede estar vacío.");
    f.n2.setCustomValidity("Error\nEl campo no puede estar vacío.");
    f.n1.oninput=function() {
        validarNumero(this);
    }
    f.n2.oninput=function() {
        validarNumero(this);
    }
    f.onsubmit = function() {
        crearTablaMult(this, contador);
        return false;
    }
    document.querySelector('button[name="anyadir"]').setAttribute('hidden', "true");
    document.querySelector('button[name="anyadir"]').onclick = function() {
        (contadorCreacion(numMax(f))+numMax(f)<10) ? anyadirElemento(++contador) : alert("No se pueden sobrepasar los 10 elementos");
    }
    let radios = document.querySelectorAll('input[type="radio"]');
    for (let radiobutton of radios) radiobutton.onchange = function() {
        if (document.querySelector("#contenido").hasChildNodes()) reemplazarElemento(contador);
    }
}