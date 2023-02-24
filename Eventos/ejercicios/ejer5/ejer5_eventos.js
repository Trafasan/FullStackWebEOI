'use strict';

/*Si pulsamos el titulo eliminar el ultimo parrafo
    1) Pide al usuario filas y columnas
	2) Haz una tabla con esas filas y columnas usando DOM en el TABLE del HTML
	    Poniendo número empezando por 1. 
	    La tabla debe tener 2px solida y color verde. Y debe estar colapsada.
	3) Si pulsas sobre un TD multiplica por 2 el valor de la celda
	4) Si pasas el ratón por encima del TD que el borde del mismo se ponga
	    con rojo y de 10px de grosor
	5) Si sale el ratón del TD vuelve a su borde normal
*/
function duplicar() {
    this.innerHTML*=2;
    // Apartado extra: Si el valor de TD excede el 100, la celda ocupa dos columnas y se elimina la celda de la derecha (si hay)
    if (this.innerHTML >= 100 && this.innerHTML/2 < 100) {
        this.setAttribute("colspan", 2);
        if (this.nextElementSibling) this.nextElementSibling.remove();
    }
}
function cambiarBorde(nodo, cursorEncima) {
    nodo.style.border = (cursorEncima)?"10px solid red":"2px solid green";
}

function insertarTabla(filas, columnas) {
    let tabla = document.querySelector("table");
    tabla.style.borderCollapse = "collapse";
    let fila, columna;
    for (let i=0; i<filas; i++) {
        fila = document.createElement("tr");
        for (let j=1; j<=columnas; j++) {
            columna = document.createElement("td");
            columna.style.border = "2px solid green";
            columna.appendChild(document.createTextNode(columnas*i+j));
            // columna.innerHTML=columnas*i+j es otra forma de hacerlo
            columna.onclick = duplicar;
            columna.onmouseover = function() {
                cambiarBorde(this, true);
            }
            columna.onmouseout = function() {
                cambiarBorde(this, false);
            }
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
}

function numCorrecto(num, input) {
    if (isNaN(num)) alert("El dato introducido en "+input+" no es un número");
    else if (num<1) alert("El número introducido en "+input+" no es válido");
    else return true;
    return false;
}

function validar() {
    let filas = document.form.filas.value;
    let columnas = document.form.columnas.value;
    if(numCorrecto(filas, "filas") && numCorrecto(columnas, "columnas")) insertarTabla(filas, columnas);

    return false;
}

window.onload = function() {
    document.form.onsubmit = validar;
}