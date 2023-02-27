'use strict';
const parametros = new URLSearchParams(window.location.search);
// let nombre = parametros.get('nombre');
// console.log(nombre);
parametros.forEach(e=>{console.log(e)});
document.body.innerHTML = "<h1>Hola "+parametros.get('nombre')+"</h1><br>"+
    "<h2>Se ha gastado usted "+parametros.get('precio')+"€</h2><br>";