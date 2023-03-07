/*Dado el formulario HTML que se facilita en el enunciado, realizar un programa con
TYPESCRIPT que permita guardar y listar tus series favoritas.

Para ello se deben realizar 2 procesos:
    Deberás trabajar con 2 estructuras:
        1. Una clase SERIES que tenga como atributos el nombre y los capítulos.
            Deberás hacer un constructor y getter y setter correspondientes.
        2. Un array de series
    Tendrás 2 funciones
        GRABAR: En el momento que el usuario rellene los campos del nombre de la serie y la cantidad de capítulos
            (ambos obligatorios y el segundo debe ser numérico) y pulse el botón grabar, se deberá procesar el formulario
            y grabar en un array la serie. Deberá recuperar los datos del formulario, validarlos,
            instanciar un objeto Serie e introducirlo en el array, finalmente deberá dejar vacíos los campos del formulario.
        LISTAR: En el momento que se modifique el desplegable, tanto a LISTA como a TABLA se deberá proceder a listar
            todos los valores del ARRAY y mostrarlos en la estructura correspondiente, si la estructura ya estaba creada previamente
            deberá ser eliminada.
        Deberá comprobar si hay hijos en el DIV y borrarlos si es el caso. Y luego dependiendo del MODO, mostrará todo el array
        de series en modo lista o tabla. Si ponemos el desplegable en vacío deberá dar un error.*/

class Series{
    constructor(private nombre:string,private capitulos:number){}

    setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    getNombre():string{
        return this.nombre;
    }

    setCapitulos(capitulos:number):void{
        this.capitulos=capitulos;
    }
    getCapitulos():number{
        return this.capitulos;
    }
}
let arraySeries:Series[] = [];

function validarNombreSerie(nodo:HTMLInputElement):string|undefined {
    if(nodo.value=="") alert("El campo del nombre de la serie no puede estar vacío");
    else return nodo.value;
}

function validarNumCapitulos(nodo:HTMLInputElement):number|undefined {
    if(nodo.value=="") alert("El campo del número de capítulos no puede estar vacío");
    else if (isNaN(+nodo.value)) alert("El campo del número de capítulos debe ser un número");
    else if (+nodo.value<1) alert("El campo del número de capítulos no es válido");
    else return +nodo.value;
}

function crearListaSeries(listado:HTMLDivElement):void {
    let lista:HTMLUListElement = document.createElement("ul");
    let elemento:HTMLLIElement;
    for (let series of arraySeries) {
        elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode("Nombre de la serie: "+series.getNombre()));
        elemento.appendChild(document.createElement("br"));
        elemento.appendChild(document.createTextNode("Número de capítulos: "+series.getCapitulos()));
        lista.appendChild(elemento);
    }
    listado.appendChild(lista);
}

function crearTablaSeries(listado:HTMLDivElement):void {
    let tabla:HTMLTableElement = document.createElement("table");
    let filaInicial:HTMLTableRowElement = document.createElement("tr");
    let tituloNombre:HTMLTableCellElement = document.createElement("th");
    tituloNombre.appendChild(document.createTextNode("Nombre de la serie"));
    filaInicial.appendChild(tituloNombre);
    let tituloCapitulos:HTMLTableCellElement = document.createElement("th");
    tituloCapitulos.appendChild(document.createTextNode("Número de capítulos"));
    filaInicial.appendChild(tituloCapitulos);
    tabla.appendChild(filaInicial);
    let fila:HTMLTableRowElement;
    let nombre:HTMLTableCellElement;
    let capitulos:HTMLTableCellElement;
    for (let series of arraySeries) {
        fila = document.createElement("tr");
        nombre = document.createElement("td");
        nombre.appendChild(document.createTextNode(series.getNombre()));
        fila.appendChild(nombre);
        capitulos = document.createElement("td");
        capitulos.appendChild(document.createTextNode(series.getCapitulos().toString()));
        fila.appendChild(capitulos);
        tabla.appendChild(fila);
    }
    listado.appendChild(tabla);
}

function mostrarSeries(nodo:HTMLSelectElement):void {
    let listado:HTMLDivElement = <HTMLDivElement>document.getElementById("listado");
    if (listado.firstElementChild) listado.removeChild(listado.firstElementChild);
    switch (nodo.value) {
        case "lista":
            crearListaSeries(listado);
            break;
        case "tabla":
            crearTablaSeries(listado);
    }
}

window.onload = function(){
    let nombreSerie:HTMLInputElement = <HTMLInputElement>document.getElementById("serie");
    let numCapitulos:HTMLInputElement = <HTMLInputElement>document.getElementById("capitulos");
    (<HTMLOptionElement>document.querySelector('option[value=""]')).hidden = true;
    (<HTMLButtonElement>document.getElementById("boton")).onclick = function(){
        let nombre:string|undefined = validarNombreSerie(nombreSerie);
        let capitulos:number|undefined = validarNumCapitulos(numCapitulos);
        if (typeof nombre == "string" && typeof capitulos == "number") {
            arraySeries.push(new Series(nombre, capitulos));
            alert("Serie añadida correctamente")
            nombreSerie.value = "";
            numCapitulos.value = "";
        }
    }
    let desplegable:HTMLSelectElement=<HTMLSelectElement>document.getElementById("modo");
    desplegable.onchange = function(){
        if (arraySeries.length == 0) {
            alert("Antes tiene que introducir al menos una serie");
            desplegable.value = "";
        }
        else mostrarSeries(desplegable);
    }
};