// Función isNaN en JavaScript

// La función isNaN se utiliza para determinar si un valor es NaN (Not-a-Number).
// NaN es un valor especial en JavaScript que indica que un valor no es un número válido.
// isNaN devuelve true si el valor proporcionado es NaN y false en caso contrario.

// Ejemplos Básicos de isNaN

console.log(isNaN(123));  // false: 123 es un número
console.log(isNaN('123'));  // false: '123' se puede convertir a número
console.log(isNaN('Hello'));  // true: 'Hello' no se puede convertir a número
console.log(isNaN(undefined));  // true: undefined no es un número
console.log(isNaN(NaN));  // true: NaN es Not-a-Number

// Funcionamiento de isNaN

// La función isNaN primero intenta convertir el valor a un número.
// Si la conversión falla, entonces devuelve true, indicando que el valor no es un número válido.

console.log(isNaN('100px'));  // true: '100px' no se puede convertir a número
console.log(isNaN(''));  // false: '' se convierte a 0
console.log(isNaN(true));  // false: true se convierte a 1
console.log(isNaN(false));  // false: false se convierte a 0

// Diferencia entre isNaN y Number.isNaN

// La función Number.isNaN es una versión más estricta de isNaN, introducida en ECMAScript 2015 (ES6).
// Number.isNaN no intenta convertir el valor a un número, simplemente verifica si es estrictamente NaN.

console.log(Number.isNaN(NaN));  // true: NaN es Not-a-Number
console.log(Number.isNaN('NaN'));  // false: 'NaN' es una cadena, no el valor especial NaN
console.log(Number.isNaN(123));  // false: 123 es un número
console.log(Number.isNaN('123'));  // false: '123' es una cadena, no NaN
console.log(Number.isNaN(true));  // false: true no es NaN

// Uso de isNaN en Validación de Entradas

// isNaN se utiliza comúnmente para validar entradas del usuario, asegurando que se introduzcan valores numéricos válidos.

function esNumeroValido(valor) {
    if (isNaN(valor)) {
        return 'El valor introducido no es un número válido.';
    } else {
        return 'El valor introducido es un número válido.';
    }
}

console.log(esNumeroValido('123'));  // El valor introducido es un número válido.
console.log(esNumeroValido('abc'));  // El valor introducido no es un número válido.
console.log(esNumeroValido(123));  // El valor introducido es un número válido.
console.log(esNumeroValido(''));  // El valor introducido es un número válido.
console.log(esNumeroValido(' '));  // El valor introducido no es un número válido.

// Resumen de Conceptos:

// - La función isNaN se utiliza para determinar si un valor es NaN (Not-a-Number).
// - isNaN intenta convertir el valor a un número antes de determinar si es NaN.
// - Number.isNaN es una versión más estricta que no intenta la conversión, solo verifica si es estrictamente NaN.
// - isNaN es útil para validar entradas del usuario y asegurar que sean valores numéricos válidos.
