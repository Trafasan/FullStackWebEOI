'use strict';
// Acceder de 5 formas distintas al primer párrafo sacando su nodeName y el innerHTML por console.log
window.onload = function() {
    // Primera forma
    let primerParrafo1 = document.getElementsByTagName("p")[0];
    console.log("Primera forma: "+primerParrafo1.nodeName);
    console.log(primerParrafo1.innerHTML);
    // Segunda forma
    let primerParrafo2 = document.querySelector("p");
    console.log("Segunda forma: "+primerParrafo2.nodeName);
    console.log(primerParrafo2.innerHTML);
    // Tercera forma
    let primerParrafo3 = document.getElementById("str").parentElement;
    console.log("Tercera forma: "+primerParrafo3.nodeName);
    console.log(primerParrafo3.innerHTML);
    // Cuarta forma
    let primerParrafo4 = document.getElementsByTagName("h2")[0].previousElementSibling;
    console.log("Cuarta forma: "+primerParrafo4.nodeName);
    console.log(primerParrafo4.innerHTML);
    // Quinta forma
    let primerParrafo5 = document.getElementById("informacion").children[0];
    console.log("Quinta forma: "+primerParrafo5.nodeName);
    console.log(primerParrafo5.innerHTML);
    // Sexta forma
    let primerParrafo6 = document.querySelectorAll("p")[0];
    console.log("Sexta forma: "+primerParrafo6.nodeName);
    console.log(primerParrafo6.innerHTML);
    // Séptimo forma
    let primerParrafo7 = document.getElementsByClassName("neg")[0].parentElement;
    // let primerParrafo7 = document.querySelector(".neg")[0].parentElement;
    console.log("Séptima forma: "+primerParrafo7.nodeName);
    console.log(primerParrafo7.innerHTML);
    // Octava forma
    let primerParrafo8 = document.head.nextElementSibling.children[0].children[0];
    console.log("Octava forma: "+primerParrafo8.nodeName);
    console.log(primerParrafo8.innerHTML);
}