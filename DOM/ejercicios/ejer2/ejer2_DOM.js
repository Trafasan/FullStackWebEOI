'use strict';

window.onload = function() {
    let info = document.getElementById("informacion");
    let mostrarH1 = document.getElementsByTagName("h1");
    info.innerHTML="Número de h1: "+mostrarH1.length;
    let negritasPagina = document.getElementsByTagName("b");
    info.innerHTML+="<br>Cantidad de negritas en la página: "+negritasPagina.length;
    let smallPagina=document.getElementsByTagName("small");
    info.innerHTML+="<br>Cantidad de small en la página: "+smallPagina.length;
    let cursivasPagina=document.getElementsByTagName("i");
    info.innerHTML+="<br>Cantidad de cursivas en la página: "+cursivasPagina.length;
}