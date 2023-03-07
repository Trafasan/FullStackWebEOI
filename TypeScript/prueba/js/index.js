"use strict";
console.log("Hola TypeScript");
let x = 3;
console.log("x");
let y = 7;
let cadena = "Hola, ¿qué tal?";
console.log(cadena);
let arrayIndefinido = [];
arrayIndefinido[0] = 2;
arrayIndefinido[1] = "Hola";
arrayIndefinido[3] = true;
console.log(arrayIndefinido);
let arrayNumeros = [3, 4, 56, 43, 1];
// arrayNumeros[2]="Hola"; da error en TS
let sumar = (x, y, z) => x + y + ((z == undefined) ? 0 : z);
// Para indicar más tipos se utiliza |
document.write("<p>Suma de dos elementos: " + sumar(x, y) +
    "<br>Suma de tres elementos: " + sumar(x, y, 9) + "</p>");
let conseguirNombre = (nombre, apellidos) => (apellidos == undefined) ? nombre : nombre + " " + apellidos;
document.write(conseguirNombre("Pablo"));
let cuerpo = document.body;
let elemento = document.getElementById("boton");
let elemento2 = document.getElementById("jejeje");
let titulo = "El Quijote";
let descripcion = "Un libro de Cervantes...";
function imprimeLibro2(x, y) {
    document.write(x + " " + y);
}
imprimeLibro2(titulo, descripcion);
function imprimeLibro(libro) {
    document.write(libro.titulo + " " + libro.descripcion);
}
let libro1 = { titulo: "El Quijote", descripcion: "Un libro de Cervantes..." };
imprimeLibro(libro1);
class Cliente {
    constructor(name, email, edad) {
        this.name = name;
        this.email = email;
        this.edad = edad;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    registrar() {
        document.write(this.name + " Registrado correctamente");
    }
    imprimirPadre() {
        console.log(this.name + " " + this.email + " " + this.edad);
    }
}
let usu1 = new Cliente("Pablo", "a@a.es", 20);
usu1.registrar();
let x2 = usu1.getName();
usu1.setName("DIEGO");
console.log(usu1.getName());
usu1.email = "pablo@iessanvicente.com";
class ClienteVip extends Cliente {
    constructor(name, email, edad, numVip) {
        super(name, email, edad);
        this.numVip = numVip;
    }
    registrar() {
        super.registrar();
    }
    imprimirHijo() {
        console.log(this.getName() + " " + this.email + " " + this.edad + " " + this.numVip);
    }
}
let cliente2 = new ClienteVip("Pilar", "zzz@zzz.es", 30, 1);
cliente2.registrar();
cliente2.imprimirHijo();
cliente2.imprimirPadre();
