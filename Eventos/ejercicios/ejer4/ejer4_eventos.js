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
    // Apartado opcional
    let titulo = document.createElement("h2");
    titulo.appendChild(document.createTextNode("Tabla creada por DOM: "));
    document.body.insertBefore(titulo, document.body.firstChild);
    // Fin del apartado opcional
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
function validarNumero(texto) {
    let n;
    do{
        n = +prompt(texto);
        if (isNaN(n)) alert("El dato introducido no es un número");
        else if (n<1) alert("El número introducido no es válido");
    } while (isNaN(n)||n<1);
    return n;
}

window.onload = function() {
    let filas = validarNumero("Introduzca el número de filas de la tabla:");
    let columnas = validarNumero("Introduzca el número de columnas de la tabla:");
    insertarTabla(filas, columnas);
}