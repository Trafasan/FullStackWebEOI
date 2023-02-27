'use strict';

window.onload = function() {
    let titulo = document.getElementsByTagName("h1")[0];
    titulo.onclick=function() {
        pulsarTitulo(this, "Sandra");
    }
    titulo.addEventListener("click",function() {
        pulsarTitulo(this, "Jorge");
    })
    // No se sobreescribe, se lanzan una detrás de otra


    let titulo2 = document.getElementsByTagName("h2")[0];
    titulo2.onclick=pulsarTitulo2;
}

function pulsarTitulo(nodo, nombre) {
    alert("Hola "+nombre);
    console.log(nodo.nodeName);
    nodo.id = "prueba";
}

function pulsarTitulo2() {
    alert("Hola Sandra");
    console.log(this.nodeName);
    this.id = "prueba";
}