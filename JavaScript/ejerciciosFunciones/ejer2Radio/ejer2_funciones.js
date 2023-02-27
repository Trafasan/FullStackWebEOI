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

function numMax(f) {
    let n1 = f.n1.value;
    let n2 = f.n2.value;
    return Math.max(n1, n2);
}
function numMin(f) {
    let n1 = f.n1.value;
    let n2 = f.n2.value;
    return Math.min(n1, n2);
}

function crearLista(nMin, nMax) {
    let contenido = document.getElementById("contenido");
    let lista = document.createElement("ul");
    let elemento;
    for (let i=1; i<=nMax; i++) {
        elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode(nMin+"x"+i+"="+(nMin*i)));
        lista.appendChild(elemento);
    }
    contenido.appendChild(lista);
}
function crearParrafo(nMin, nMax) {
    let contenido = document.getElementById("contenido");
    let div = document.createElement("div");
    let parrafo;
    for (let i=1; i<=nMax; i++) {
        parrafo = document.createElement("p");
        parrafo.appendChild(document.createTextNode(nMin+"x"+i+"="+(nMin*i)));
        div.appendChild(parrafo);
    }
    contenido.appendChild(div);
}
function crearTabla(nMin, nMax) {
    let contenido = document.getElementById("contenido");
    let tabla = document.createElement("table");
    let fila, mult, igual, producto;
    for (let i=1; i<=nMax; i++) {
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
    contenido.appendChild(tabla);
    
}
function crearDesplegable(nMin, nMax) {
    let contenido = document.getElementById("contenido");
    let parrafo = document.createElement("p");
    let label = document.createElement("label");
    let select = document.createElement("select");
    select.setAttribute("name", "multiplicaciones");
    let opcionVacia = document.createElement("option");
    opcionVacia.hidden = true;
    select.appendChild(opcionVacia);
    let opcion;
    for (let i=1; i<=nMax; i++) {
        opcion = document.createElement("option");
        opcion.setAttribute("value", i);
        opcion.appendChild(document.createTextNode(nMin+"x"+i+"="+(nMin*i)));
        select.appendChild(opcion);
    }
    label.appendChild(select);
    parrafo.appendChild(label);
    contenido.appendChild(parrafo);
}
function crearTablaMult() {
    let f=document.form;
    let nMin = numMin(f);
    let nMax = numMax(f);
    let tipo = f.opciones.value;
    switch (tipo) {
        case "lista":
            crearLista(nMin, nMax);
            break;
        case "parrafo":
            crearParrafo(nMin, nMax);
            break;
        case "tabla":
            crearTabla(nMin, nMax);
            break;
        case "desplegable":
            crearDesplegable(nMin, nMax);
            break;
    }
    document.querySelector('button[name="crearTabla"]').setAttribute('hidden', "true");
    document.querySelector('button[name="anyadir"]').removeAttribute('hidden');
    document.querySelectorAll('.numero')[0].setAttribute('hidden', "true");
    document.querySelectorAll('.numero')[1].setAttribute('hidden', "true");
    return false;
}

function anyadirLista(nMin, nMax) {
    let lista = document.querySelector("ul");
    let elemento = document.createElement("li");
    elemento.appendChild(document.createTextNode(nMin+"x"+nMax+"="+(nMin*nMax)));
    lista.appendChild(elemento);
}
function anyadirParrafo(nMin, nMax) {
    let div = document.querySelector("#contenido>div");
    let parrafo = document.createElement("p");
    parrafo.appendChild(document.createTextNode(nMin+"x"+nMax+"="+(nMin*nMax)));
    div.appendChild(parrafo);
}
function anyadirTabla(nMin, nMax) {
    let tabla = document.querySelector("table");
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
    tabla.appendChild(fila);    
}
function anyadirDesplegable(nMin, nMax) {
    let select = document.querySelector("select");
    let opcion = document.createElement("option");
    opcion.setAttribute("value", nMax);
    opcion.appendChild(document.createTextNode(nMin+"x"+nMax+"="+(nMin*nMax)));
    select.appendChild(opcion);
}
function anyadirElemento(contador) {
    let f=document.form;
    let nMin = numMin(f);
    let nMax = numMax(f)+contador;
    let tipo = f.opciones.value;
    switch (tipo) {
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
    let nMax = numMax(f)+contador;
    let contenido = document.getElementById("contenido").firstElementChild.nodeName;
    document.getElementById("contenido").removeChild(document.getElementById("contenido").firstElementChild);
    switch (contenido) {
        case "UL": /*La tabla está en formato Lista*/
            crearParrafo(nMin, nMax);
            document.querySelector('input[value="parrafo"]').checked = true
            break;
        case "DIV": /*La tabla está en formato Párrafo*/
            crearTabla(nMin, nMax);
            document.querySelector('input[value="tabla"]').checked = true
            break;
        case "TABLE": /*La tabla está en formato Tabla*/
            crearDesplegable(nMin, nMax);
            document.querySelector('input[value="desplegable"]').checked = true
            break;
        case "P": /*La tabla está en formato Desplegable*/
            crearLista(nMin, nMax);
            document.querySelector('input[value="lista"]').checked = true
            break;
    }
}

function reemplazarElemento(contador) {
    let f=document.form;
    let nMin = numMin(f);
    let nMax = numMax(f)+contador;
    let tipo = f.opciones.value;
    document.getElementById("contenido").removeChild(document.getElementById("contenido").firstElementChild);
    switch (tipo) {
        case "lista":
            crearLista(nMin, nMax);
            break;
        case "parrafo":
            crearParrafo(nMin, nMax);
            break;
        case "tabla":
            crearTabla(nMin, nMax);
            break;
        case "desplegable":
            crearDesplegable(nMin, nMax);
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
    f.onsubmit = crearTablaMult;
    document.querySelector('button[name="anyadir"]').setAttribute('hidden', "true");
    document.querySelector('button[name="anyadir"]').onclick = function() {
        contador++;
        anyadirElemento(contador);
    }
    document.getElementById("contenido").onclick = function() {
        cambiarElemento(contador);
    }
    let radios = document.querySelectorAll('input[type="radio"]');
    for (let radiobutton of radios) radiobutton.onchange = function() {
       if (document.querySelector("#contenido").hasChildNodes()) reemplazarElemento(contador);
    }
}