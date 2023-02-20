'use strict';

/*
Crea una función que reciba tres strings y devuelva un string que contenga el primer string con todas las apariciones del segundo string sustituidas por el tercer string.
Contar cuántas veces se encuentra el segundo string.
*/
function sustitucion(cadenaInicial, trozoParaSustituir, cadenaSustituta) {
    console.log("La cadena inicial es: "+cadenaInicial);
    let posicion = 0;
    let contador = 0;
    while (cadenaInicial.indexOf(trozoParaSustituir, posicion) != -1) {
        posicion = cadenaInicial.indexOf(trozoParaSustituir, posicion) + cadenaSustituta.length;
        contador++;
    }
    console.log ("La cadena reemplazada es: "+cadenaInicial.replaceAll(trozoParaSustituir, cadenaSustituta));
    console.log("El trozo "+trozoParaSustituir+" se ha encontrado "+contador+" ve"+((contador == 1) ? "z" : "ces")+".");
}

sustitucion("Pablo habla mucho", "ab", "_ab_");
sustitucion("Pablo habla mucho", "ab", "_--_");
sustitucion("Pablo", "ab", "_--_");
sustitucion("Sandra", "ab", "_--_");