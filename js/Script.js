console.log("Hola mundo de desde un archivo externo");
console.log("   Declarar Variables");
let cadena = "Hola mundo!";
let numero=42;
let logico = true;
let nulo = null;
let indefinido = undefined;
let simbolo = Symbol("foo");

console.log(cadena, numero, logico, nulo, indefinido, simbolo);

let objeto1 = {nombre: "Elías", edad: 20};
let arreglo = [1, 2, 3, 4, 5];

function suma(a,b){
    return a+b;
}

let fecha = new Date();
let patron = /ab+c/;
let error = new Error("Error de prueba");

console.table(objeto1);
console.table(arreglo);
console.log(suma(33,7));
console.log(fecha);

var variable = 3; //No es tan usada
const constante = 2; 

let a=5;
let b=3;

let resultado = ((a+ b -2) * 3) / 2;
console.log(resultado); // 9
resultado +=1;

console.log(a > b); //true
console.log(a === b); //false, se compara el valor y el tipo

console.log(resultado % 3==0 ? "like" : "dislike");

let concatenacion = "Hola " + "mundo";

console.log(concatenacion);

let edad = 18;
console.log("*****CONDICIONALES*****");
if (edad >= 18){
    console.info("Eres mayor de edad");
    console.warn("Eres mayor de edad");
} else {
    console.info("Eres menor de edad");
    console.warn("Eres menor de edad");
}

let anio = prompt("En que año naciste?"); //parseInt en caso de que de error por la incomptaibilidad
let anio_actual = new Date().getFullYear();
edad = anio_actual -anio;

if(edad >= 18){
    console.info("Eres mayor de edad");
} else if (edad >= 12 && edad < 18){
    if (edad == 12){
        console.log("Eres preadolescente");
    }else {
        console.log("Eres un adolescente");
    }
} else {
    console.warn("Eres un niño");
}

let dia = parseInt(prompt("Ingresa un numero del 1 al 7")); //parse int porque la lee como una cadena 

switch (dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    default:
        console.error("Dia no valido");
}

console.log("*****FUNCIONES*****");
let resta = function(a,b){
    return a-b;
};

console.log(resta(5,3)); //2

let multiplicacion = (a,b) => a*b;

console.log(multiplicacion(5,3)); //15

let objeto = {
    nombre: "Luis",
    saludar: function () {
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000)
    },
};

objeto.saludar();

console.log("*****ARREGLOS*****")
let frutas = ["🍎","🍐","🍇","🍓"];

frutas.push("🥭");//agrega al final 
frutas.unshift("🍌");//agrega al inicio
frutas.pop();//elimina el ultimo elemento
console.log(frutas); //platano, manzana, pera, uva, fresa

let frutas2 = frutas.slice(1,3); //
console.log(frutas2.join(" - ")); //manzana - pera
console.log(frutas.length); //5
console.log(frutas.indexOf("🍇")); //3

let frutas3 = frutas.map((fruta) => fruta + "🍉");
console.table(frutas3);
