'use strict';

/* Crea un script (usando al menos 1 función) en el que se le pida al usuario 2 datos:
•El primero será dos números del 1 al 10 (debes dar error en otro caso)
•El segundo será el modo de visualización: LISTA , PARRAFO o TABLA (debe dar error si elige otra cosa)
•El programa mostrará la tabla de multiplicar del número más pequeño, llegando hasta el número más grande
•Ojo, tendrás que tener en cuenta que el usuario puede ponerte el segundo número más pequeño que el primero. */

document.head.innerHTML += "<link rel=\"stylesheet\" href=\"ejer2_funciones.css\"></link>"; // Esto añade al head los estilos de la página
let info = document.getElementById("contenido");

function impresionLista() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let nMin = Math.min(n1, n2);
    let nMax = Math.max(n1, n2);
    let introducir = "<ul>";
    for (let i=1; i<=nMax; i++) introducir+="<li>"+nMin+"x"+i+"="+(nMin*i)+"</li>";
    introducir+="</ul>";
    info.innerHTML+=introducir;
}

function impresionParrafo() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let nMin = Math.min(n1, n2);
    let nMax = Math.max(n1, n2);
    let introducir = "<div>";
    for (let i=1; i<=nMax; i++) introducir+="<p>"+nMin+"x"+i+"="+(nMin*i)+"</p>";
    introducir+="</div>";
    info.innerHTML+=introducir;
}
function impresionTabla() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let nMin = Math.min(n1, n2);
    let nMax = Math.max(n1, n2);
    let introducir = "<table>";
    for (let i=1; i<=nMax; i++) introducir+="<tr><td>"+nMin+"x"+i+"</td><td>=</td><td>"+(nMin*i)+"</td></tr>";
    introducir+="</table>";
    info.innerHTML+=introducir;
}
function impresionDesplegable() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let nMin = Math.min(n1, n2);
    let nMax = Math.max(n1, n2);
    let introducir = "<p><label>Tabla de multiplicar del "+nMin+": <select name=\"multiplicaciones\">";
    introducir+="<option value=\"\" hidden>&nbsp</option>";
    for (let i=1; i<=nMax; i++) introducir+="<option value=\""+i+"\">"+nMin+"x"+i+"="+(nMin*i)+"</option>";
    introducir+="</select></label></p>";
    info.innerHTML+=introducir;
}