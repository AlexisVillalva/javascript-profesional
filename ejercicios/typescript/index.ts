
//TYPESCRIPT


// tipos de datos

//tods los normales

//*ARREGLOS*

// se definen de dos maneras

// 1. utilizando string[] o el tipo de dato seguido de los corchetes
let people: string[] = ['Luis', 'Marina', 'Sofia'];
//people.push(200) // error, no se aceptan numeros porque el arreglo es de tipo string

// 2. utilizando Array<tipo_de_dato>
let numeros: Array<number> = [1,2,3,4];

// arreglos de varios tipos de datos

let peopleAndNumbers: Array<string | number> = [1, 2, "Sofia"];
console.log(peopleAndNumbers);

//* ENUMS *

// Los enums son un conjunto de valores. Se enumeran a partir de 0

enum Color {
    Rojo,
    Verde,
    Azul
}

// se utiliza despues de los dos puntos, el nombre del enum
let colorFav: Color = Color.Verde;

console.log(colorFav); // imprime 1, porque el color verde esta en la posicion 1 comenzando desde 0

// asignando valores podemos colocar cualquier tipo de dato para utilizarlo
enum Numbers{
    One = "This is the value ONE",
    Two = 2,
    Three = 3
}

let favNumber: Numbers = Numbers.One;
console.log(favNumber); // "This is the value ONE"
console.log(Numbers.Two); // "2"

// * any * 

// podemos utilizar any para indicarle a una variable que puede utilizar cualquier
// tipo de dato

let comodin: any = "Joker";
comodin = {
    name: "Samuel"
}
comodin = 2; // no hay error, ya que puede ser cualquier tipo de dato

// * object *

// conocidos como JSON (Javascript Object Notation) tambien los podemos
// utilizar en TS. son un tipo de dato no primitivo.
// Almacenan valores dentro del ambito de un objeto y se acceden mediante llaves o "keys"

let person = {
    name: "Josue",
    age: 20
}
// tambien podemos especificar explicitamente el tipo de dato
let person2: object = {
    name: "Luis"
}

// * Tuple *

// los tipos tupla le permiten expresar una matriz con un numero fijo de elementos cuyos tipos son conocidos
let x: [string, number];
x = ["Hello from a tuple", 20]; // la asignamos los valores del tipo de dato que espera la tupla
x = ["Pepe", 1];
console.log(x);

// es importante resaltar que las tuplas utilizan el mismo __proto__ del array.

// * Funciones * 
console.log(" * Funciones * ");

// parametros tipados

// tipamos los parametros como si estuvieramos tipando variables.
// para especificar el tipo de dato que regresa la funcion ponemos los dos puntos despues de pasar los parametros

function add(a: number, b: number): number{
    return a+b;
}

const suma: number = add(3, 4);
console.log(suma);

// funciones que no retornan nada
function returnVoid(): void {
    console.log("Hola no devuelvo nada");
}

// funcion que retorna otra funcion

// se anota el valor de retorno que regresa una funcion de la forma
// (dato que entra a la funcion) => dato que sale de la funcion
function createAdder(a: number): (number) => number{
    return function(b: number): number{
        return b+a;
    }
}

// funciones con parametros opcionales y parametros predeterminados

// parametro opcional:
// utilizamos un signo de interrogacion despues del identificador del parametro
function getFullName(firstName: string, lastName?: string): string{
    return `${firstName} ${lastName}`;
}

const richard = getFullName("Richard"); // no pide el segundo parametro porque no es obligatorio
console.log(richard); // "Richard undefined"

// parametro por defecto o predeterminado
// despues del tipado del parametro, asignamos el valor por defecto con "="
function getFullName2(firstName: string, lastName: string = "Smith"): string{
    return `${firstName} ${lastName}`;
}

const alexis = getFullName2("Alexis"); // "Alexis Smith"
console.log(alexis);

// * Interfaces *

/* las interfaces en typescript permiten tener un "contrato"
es decir, lo que queremos que un objeto tenga obligatoriamente, es como si estuvieramos definiendo
un tipo de dato y se utiliza de la misma manera

*/

enum Colors {
    Rojo = "Rojo",
    Verde = "Verde"
}

// se utiliza la keyword interface
// utilizamos el tipado para especificar el tipo de dato de cada propiedad del objeto
// tambien podemos utilizar propiedades opcionales con el signo ?
interface Rectangulo {
    ancho: number
    alto: number
    color?: Colors
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Colors.Rojo
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRec = area(rect);

rect.toString = function () {
    return this.color ? `Un rectángulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());