// var, let y const en JavaScript

// En JavaScript, hay tres formas principales de declarar variables: var, let y const.
// Cada una tiene sus propias características y usos específicos.

// var

// 1. Alcance de función: Las variables declaradas con var tienen un alcance de función,
// lo que significa que son accesibles dentro de la función en la que fueron declaradas.

function ejemploVar() {
    var x = 10;
    if (true) {
        var x = 20;  // La misma variable x
        console.log(x);  // Imprime: 20
    }
    console.log(x);  // Imprime: 20
}
ejemploVar();

// 2. Hoisting: Las declaraciones de variables con var son "elevadas" al principio de su contexto (función o script).

console.log(y);  // Imprime: undefined
var y = 5;

// let

// 1. Alcance de bloque: Las variables declaradas con let tienen un alcance de bloque,
// lo que significa que son accesibles solo dentro del bloque en el que fueron declaradas.

function ejemploLet() {
    let z = 10;
    if (true) {
        let z = 20;  // Variable diferente
        console.log(z);  // Imprime: 20
    }
    console.log(z);  // Imprime: 10
}
ejemploLet();

// 2. No hoisting: Las declaraciones de variables con let no se elevan, y no se pueden usar antes de ser declaradas.

try {
    console.log(a);  // Error: a is not defined
} catch (e) {
    console.log(e.message);  // Imprime: a is not defined
}
let a = 5;

// const

// 1. Alcance de bloque: Las variables declaradas con const tienen un alcance de bloque, similar a let.

function ejemploConst() {
    const b = 10;
    if (true) {
        const b = 20;  // Variable diferente
        console.log(b);  // Imprime: 20
    }
    console.log(b);  // Imprime: 10
}
ejemploConst();

// 2. No se puede reasignar: Una vez que una variable ha sido asignada con const, no se puede reasignar.

const c = 5;
try {
    c = 10;  // Error: Assignment to constant variable.
} catch (e) {
    console.log(e.message);  // Imprime: Assignment to constant variable.
}

// 3. Inmutabilidad de objetos: Aunque const evita la reasignación de la variable, no hace que el valor sea inmutable.

const persona = { nombre: "Juan", edad: 30 };
persona.edad = 31;  // Esto es permitido
console.log(persona);  // Imprime: { nombre: "Juan", edad: 31 }

// Recomendaciones de Uso

// 1. Usar const por defecto: Para variables que no necesitan ser reasignadas, usa const.
// 2. Usar let para variables que cambian: Si necesitas reasignar la variable, usa let.
// 3. Evitar el uso de var: El uso de var puede llevar a errores difíciles de detectar debido a su alcance de función y hoisting.

// Conclusiones

// - var tiene alcance de función y permite hoisting, pero puede llevar a errores debido a su comportamiento.
// - let tiene alcance de bloque y no permite hoisting, lo que lo hace más seguro y predecible.
// - const tiene alcance de bloque, no permite reasignación y es ideal para valores que no deben cambiar.

// En resumen, es recomendable usar let y const en lugar de var para escribir un código más seguro y mantenible. Const debe ser tu primera opción, y let se debe usar solo cuando necesites cambiar el valor de una variable.

