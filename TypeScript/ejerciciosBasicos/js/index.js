"use strict";
/*Este código está hecho en JavaScript y hay que pasarlo a TypeScript empleando variables “let” y constantes.
El código javaScript sería así:
var nombre;
nombre = "Pablo";
var edad;
edad = 30;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};*/
console.log("Ejercicio 1 | Variables y constantes");
let nombre;
nombre = "Pablo";
let edad;
edad = 30;
const personaje1 = {
    nombre: nombre,
    edad: edad
};
console.log("Personaje creado como objeto:");
console.log(personaje1);
const personaje2 = { nombre: "Pablo", edad: 30 };
console.log("Personaje creado con una interfaz:");
console.log(personaje2);
/* · Ahora en TypeScript vamos a crear la clase Rombo, la cual debe tener dos propiedades:
        DiagonalVertical y DiagonalHorizontal.
    · Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el objeto.
    · Y también debe de tener un método que calcule el área, que será la multiplicación de DiagonalVertical * DiagonalHorizontal.
        Este método devolverá un número.
*/
console.log("Ejercicio 2 | Clases");
class Rombo {
    constructor(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    // Se podría poner también de esta manera
    /*constructor(private diagonalVertical:number,private diagonalHorizontal:number){}*/
    setDiagonalVertical(diagonalVertical) {
        this.diagonalVertical = diagonalVertical;
    }
    getDiagonalVertical() {
        return this.diagonalVertical;
    }
    setDiagonalHorizontal(diagonalHorizontal) {
        this.diagonalHorizontal = diagonalHorizontal;
    }
    getDiagonalHorizontal() {
        return this.diagonalHorizontal;
    }
    getArea() {
        return (this.diagonalVertical * this.diagonalHorizontal) / 2;
    }
}
console.log("Área del rombo: " + new Rombo(30, 16).getArea());
// Ejericio 3 | Funciones de flecha
/*En este ejercicio vamos a cambiar una función normal de javascript a una función de tipo flecha.
Cómo ya sabrás las funciones de flecha no alteran el “this” cuando se corren,
por lo que son interesantes para cubrir algunos problemas de JavaScript.
La función en Js sería esta:
function suma(a, b) {
    return a+b;
} */
let suma = (a, b) => a + b;
console.log(suma(6, 7));
let spiderman = { nombre: "Peter parket", poderes: ["trepar", "fuerza", "agilidad", "telas de araña"] };
console.log(spiderman);
