'use strict';

/* Crea un script (usando al menos 1 función) en el que se le pida al usuario 2 datos:
•El primero será dos números del 1 al 10 (debes dar error en otro caso)
•El segundo será el modo de visualización: LISTA , PARRAFO o TABLA (debe dar error si elige otra cosa)
•El programa mostrará la tabla de multiplicar del número más pequeño, llegando hasta el número más grande
•Ojo, tendrás que tener en cuenta que el usuario puede ponerte el segundo número más pequeño que el primero. */

document.head.innerHTML += "<link rel=\"stylesheet\" href=\"ejer2_funciones.css\"></link>"; // Esto añade al head los estilos de la página
let info = document.getElementById("contenido");

function obtenerNumeros() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    return [Math.min(n1, n2), Math.max(n1, n2)];
}

lista.onclick = function() {
    let numeros = obtenerNumeros();
    let introducir = "<ul>";
    for (let i=1; i<=numeros[1]; i++) introducir+="<li>"+numeros[0]+"x"+i+"="+(numeros[0]*i)+"</li>";
    introducir+="</ul>";
    info.innerHTML+=introducir;
}

parrafo.onclick = function() {
    let numeros = obtenerNumeros();
    let introducir = "<div>";
    for (let i=1; i<=numeros[1]; i++) introducir+="<p>"+numeros[0]+"x"+i+"="+(numeros[0]*i)+"</p>";
    introducir+="</div>";
    info.innerHTML+=introducir;
}
tabla.onclick = function() {
    let numeros = obtenerNumeros();
    let introducir = "<table>";
    for (let i=1; i<=numeros[1]; i++) introducir+="<tr><td>"+numeros[0]+"x"+i+"</td><td>=</td><td>"+(numeros[0]*i)+"</td></tr>";
    introducir+="</table>";
    info.innerHTML+=introducir;
}
desplegable.onclick = function() {
    let numeros = obtenerNumeros();
    let introducir = "<p><label>Tabla de multiplicar del "+numeros[0]+": <select name=\"multiplicaciones\">";
    introducir+="<option value=\"\" hidden>&nbsp</option>";
    for (let i=1; i<=numeros[1]; i++) introducir+="<option value=\""+i+"\">"+numeros[0]+"x"+i+"="+(numeros[0]*i)+"</option>";
    introducir+="</select></label></p>";
    info.innerHTML+=introducir;
}