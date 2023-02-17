'use strict';

let madre = document.documentElement;
console.log(madre.lang);
madre.lang="en";
console.log(madre.lang);
console.log(madre.nodeName);
let cabecera = document.head;
console.log(cabecera.nodeName);
let cuerpo = document.body;
console.log(cuerpo.nodeName);

let parrafo1 = document.getElementById("p1");
console.log(parrafo1.nodeName);

let parrafosClass = document.getElementsByClassName("parrafos");
let parrafo3=parrafosClass[0];
console.log(parrafo3.nodeName);
let parrafo4=parrafosClass[1];
console.log(parrafo4.nodeName);

// Para elementos con atributo name
/* let parrafosName = document.getElementsByName("p2");
let parrafo2=parrafosName[0];
console.log(parrafo2.nodeName); */

let titulos=document.getElementsByTagName("h1");
let titulo1 = titulos[0];
console.log(titulo1.nodeName);
console.log(titulo1.innerHTML);