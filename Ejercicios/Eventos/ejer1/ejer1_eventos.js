'use strict';

function cargar() {
    let imagen = document.getElementsByTagName("img")[0];
    imagen.onmouseover = function(){
        cambiaImagen(this, "mickey2.png");
    }
    imagen.addEventListener("mouseout", function(){
        cambiaImagen(this, "mickey.png");
    });
}

function cambiaImagen(nodo, nombreImagen) {
    nodo.setAttribute("src", nombreImagen);
}

window.addEventListener("load", cargar);