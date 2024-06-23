// Tipos de Datos en JavaScript

// JavaScript es un lenguaje de tipado dinámico, lo que significa que las variables pueden contener valores de cualquier tipo y pueden cambiar de tipo en tiempo de ejecución.

// Los tipos de datos en JavaScript se pueden clasificar en dos categorías principales: tipos primitivos y tipos de objeto.

// Tipos Primitivos

// 1. Número
// Los números en JavaScript pueden ser enteros o de punto flotante.

let entero = 42;
let flotante = 3.14;

console.log(entero);  // Imprime: 42
console.log(flotante);  // Imprime: 3.14

// 2. Cadena de caracteres (String)
// Una cadena es una secuencia de caracteres y se puede definir usando comillas simples, comillas dobles o backticks.

let cadena1 = 'Hola';
let cadena2 = "Mundo";
let cadena3 = `Hola Mundo`;

console.log(cadena1);  // Imprime: Hola
console.log(cadena2);  // Imprime: Mundo
console.log(cadena3);  // Imprime: Hola Mundo

// 3. Booleano
// Un valor booleano puede ser verdadero (true) o falso (false).

let esVerdadero = true;
let esFalso = false;

console.log(esVerdadero);  // Imprime: true
console.log(esFalso);  // Imprime: false

// 4. Undefined
// Una variable que ha sido declarada pero no inicializada tiene el valor undefined.

let indefinido;
console.log(indefinido);  // Imprime: undefined

// 5. Null
// El valor null representa la ausencia intencional de cualquier valor.

let nulo = null;
console.log(nulo);  // Imprime: null

// 6. Symbol (Introducido en ECMAScript 6)
// Un símbolo es un valor único e inmutable que se utiliza como identificador.

let simbolo1 = Symbol('descripcion');
let simbolo2 = Symbol('descripcion');

console.log(simbolo1);  // Imprime: Symbol(descripcion)
console.log(simbolo1 === simbolo2);  // Imprime: false (cada símbolo es único)

// Tipos de Objeto

// 1. Object
// Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.

let persona = {
    nombre: 'Ana',
    edad: 25
};

console.log(persona);  // Imprime: { nombre: 'Ana', edad: 25 }

// 2. Array
// Un array es una lista ordenada de valores, y cada valor se llama elemento. Los arrays en JavaScript son objetos especiales.

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);  // Imprime: [1, 2, 3, 4, 5]

// 3. Function
// Las funciones son bloques de código diseñados para realizar una tarea particular. Las funciones en JavaScript son objetos de primera clase.

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Nacho'));  // Imprime: Hola, Juan

// Resumen de Conceptos:

// - Los tipos de datos primitivos incluyen: Número, Cadena, Booleano, Undefined, Null y Symbol.
// - Los tipos de objeto incluyen: Object, Array y Function.
// - JavaScript es un lenguaje de tipado dinámico, lo que permite cambiar el tipo de una variable en tiempo de ejecución.

