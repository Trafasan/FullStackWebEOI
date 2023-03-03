console.log("Hola TypeScript");

let x:number = 3;
console.log("x");
let y:number = 7;

let cadena:string = "Hola, ¿qué tal?"
console.log(cadena);

let arrayIndefinido:any[2] = [];
arrayIndefinido[0]=2;
arrayIndefinido[1]="Hola";
arrayIndefinido[3]=true;
console.log(arrayIndefinido);

let arrayNumeros:number[]=[3,4,56,43,1];

// arrayNumeros[2]="Hola"; da error en TS

let sumar = (x:number, y:number, z?:number|undefined) => x+y+((z==undefined)?0:z);
// Para indicar más tipos se utiliza |
document.write("<p>Suma de dos elementos: "+sumar(x, y)+
        "<br>Suma de tres elementos: "+sumar(x, y, 9)+"</p>");

let cuerpo:HTMLElement=document.body;
let elemento:HTMLButtonElement=<HTMLButtonElement>document.getElementById("boton");