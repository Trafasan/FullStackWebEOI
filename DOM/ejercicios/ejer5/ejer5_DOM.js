'use strict';
/*Con el html de este formulario dado realiza las siguientes 
acciones con javaScript:
1- Que cambie el valor del atributo lang de la etiqueta HTML a "en".
2- Que imprima en un console.log el valor del action
3- Accede al primer elemento que tenga la clase "rojo" 
(debes hacerlo de 2 formas distintas,
usando la función DOM pertinende y querySelector) Y debes imprimir en
console.log el valor de la clase y cuantos elementos 
tienen ese valor de clase.
4- Finalmente cuantos label hay en el documento*/
window.onload = function() {
    // Cambiar el valor del atributo lang de la etiqueta HTML a "en"
    let madre = document.documentElement;
    madre.setAttribute("lang", "en");
    console.log(madre.getAttribute("lang"));
    // Imprimir en un console.log el valor del action
    let action = document.getElementById("pepito").getAttributeNode("action");
    console.log(action.nodeValue);
    // console.log(pepito.getAttribute("action"));
    // Acceder al primer elemento que tenga la clase "rojo" (función DOM)
    let elementosRojo = document.getElementsByClassName("rojo");
    console.log(elementosRojo[0].className);
    // console.log(elementosRojo[0].getAttribute("class"));
    console.log("Número de elementos que tienen ese valor de clase: "+elementosRojo.length);
    // Acceder al primer elemento que tenga la clase "rojo" (querySelector)
    let elementoRojo2 = document.querySelector(".rojo");
    console.log(elementoRojo2.className);
    console.log("Número de elementos que tienen ese valor de clase: "+document.querySelectorAll(".rojo").length);
    // Imprimir cuantos label hay en el documento
    let label = document.getElementsByTagName("label");
    console.log("Número de label que hay en el documento: "+label.length);
}