'use strict';

/*Crea un array que contenga los nombres de los días de la semana.
Muestra todos los elementos del array por consola, recorriéndolo con un bucle for … in*/

let diasSemana = new Array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");
console.log("Método 1:") // for...in 
for (var index in diasSemana) {
    console.log(diasSemana[index]);
}
console.log("Método 2:") // for normal
for (let i=0; i<diasSemana.length; i++) {
    console.log(diasSemana[i]);
}
console.log("Método 3:") // for each estructural
for (let dia of diasSemana) {
    console.log(dia);
}
console.log("Método 4:") // for each funcional
diasSemana.forEach(function(dia){
    console.log(dia);
});

let sum = function (num1, num2){
    return num1+ num2;
};
console.log(sum(12, 5)); // imprime 17

// DEVUELVE OTRO ARRAY DONDE CADA DIA DE LA SEMANA SE LE CONCATENE EL NÚMERO DE LA SEMANA DE 1 A 7
console.log("Días de la semana en números:")
/*console.log(diasSemana.map(function(dia){
    return diasSemana.indexOf(dia)+1;
}));*/
console.log(diasSemana.map((dia) => diasSemana.indexOf(dia)+1));

// IMPRIME OTRO ARRAY CON LOS ELEMENTOS QUE ACABEN EN CONSONANTE
console.log("Días de la semana que acaben en consonante:")
/*console.log(diasSemana.filter(function(dia){
    return dia.charAt(dia.length-1) == 's';
}));*/
console.log(diasSemana.filter((dia) => dia.charAt(dia.length-1) == 's'));

// INDICA SI ALGÚN DÍA TIENE 2 VOCALES A O E EN EL NOMBRE
console.log("¿Algún día tiene dos vocales A o E en el nombre?")
/*console.log(diasSemana.some(function(dia){
    let posicionA = dia.indexOf('a')+1;
    let posicionE = dia.indexOf('e')+1;
    return (dia.indexOf('a') != -1 && dia.indexOf('a', posicionA) != -1) || (dia.indexOf('e') != -1 && dia.indexOf('e', posicionE) != -1);
}));*/
console.log(diasSemana.some((dia) => {
    let posicionA = dia.indexOf('a')+1;
    let posicionE = dia.indexOf('e')+1;
    return (dia.indexOf('a') != -1 && dia.indexOf('a', posicionA) != -1) || (dia.indexOf('e') != -1 && dia.indexOf('e', posicionE) != -1);
}));

// ORDENA EL ARRAY DE DIAS DESCENDENTEMENTE
console.log("Días de la semana ordenados inversamente:")
diasSemana.sort();
console.log(diasSemana.reverse());