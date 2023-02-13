'use strict';

/*Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno,
pero con los elementos separados por "==>" (Join)):*/
function ejer1() {
    let array1 = apartado1();
    apartado2(array1);
    apartado3(array1);
    apartado4(array1);
    apartado5(array1);
    apartado6(array1);
}
/*Crea un array con 4 elementos numéricos*/
function apartado1() {
    let array1 = new Array(4, 7, 2, 8);
    console.log("Apartado 1: "+array1.join("==>"));
    return array1;
}
/* 
•Concatena 2 elementos más al final y 2 al principio (unshift y push)*/
function apartado2(array1) {
    array1.unshift(0);
    array1.unshift(5);
    array1.push(3);
    array1.push(9);
    console.log("Apartado 2: "+array1.join("==>"));
}
/*Elimina las posiciones de la 3 a la 5 (incluida) (splice)*/
function apartado3(array1) {
    array1.splice(3, 3);
    console.log("Apartado 3: "+array1.join("==>"));
}
/*Inserta 2 elementos más entre el penúltimo y el último (splice)*/
function apartado4(array1) {
    array1.splice(array1.length-1, 0, 1, 6);
    console.log("Apartado 4: "+array1.join("==>"));
}
/*Invierte el array (reverse)*/
function apartado5(array1) {
    array1.reverse();
    console.log("Apartado 5: "+array1.join("==>"));
}
/*Muestra el array ordenado*/
function apartado6(array1) {
    array1.sort(function(n1, n2){
        return n1-n2; // Ordena de menor a mayor
        // return n2-n1; // Ordena de mayor a menor
    });
    console.log("Apartado 6: "+array1.join("==>"));
}

ejer1();