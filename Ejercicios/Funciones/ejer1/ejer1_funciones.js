'use strict';

/* Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
Dicha función hará lo siguiente:
•Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
•Convierte el nombre de producto a string (por si acaso) y los otros 2 a número.
•Si el precio o el impuesto no son números válidos muestra un error.
•Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
•Llama a la función varias veces, omitiendo parámetros, con todos ellos, y pasando algún valor no numérico en el precio o impuesto */

function ejer1(nombre = "Producto genérico", precio = +100, impuesto=21) {
    let name = String(nombre);
    let price = parseFloat(precio);
    let tax = parseInt(impuesto);
    if (isNaN(price)||isNaN(tax)||price<0||impuesto<0) {
        console.error("El precio y/o el impuesto son inválidos.");
        return null;
    }
    else {
        let precioFinal = price*(1+tax/100);
        precioFinal = Math.round(precioFinal * 100) / 100;
        return name+": "+precioFinal+"€";
    }
}

console.log(ejer1());
console.log(ejer1("Cama", "79,99")); // Precio = 79
console.log(ejer1("Cama", "79.99"));
console.log(ejer1(1265, 50, "Hola"));
console.log(ejer1(1265, "Hola", "Mundo"));