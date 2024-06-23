// Bucles en JavaScript

// Los bucles son una forma fundamental de ejecutar repetidamente un bloque de código mientras se cumple una condición específica.
// En JavaScript, hay varios tipos de bucles: for, while, do...while, for...in y for...of.

// Bucle for

// El bucle for es el más comúnmente utilizado y se compone de tres partes: inicialización, condición y actualización.

for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i}`);  // Imprime: Iteración 0, Iteración 1, Iteración 2, Iteración 3, Iteración 4
}

// Bucle while

// El bucle while ejecuta el bloque de código siempre que la condición sea verdadera.

let j = 0;
while (j < 5) {
    console.log(`Iteración ${j}`);  // Imprime: Iteración 0, Iteración 1, Iteración 2, Iteración 3, Iteración 4
    j++;
}

// Bucle do...while

// El bucle do...while es similar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez.

let k = 0;
do {
    console.log(`Iteración ${k}`);  // Imprime: Iteración 0, Iteración 1, Iteración 2, Iteración 3, Iteración 4
    k++;
} while (k < 5);

// Bucle for...in

// El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto.

const objeto = { a: 1, b: 2, c: 3 };
for (const clave in objeto) {
    console.log(`Clave: ${clave}, Valor: ${objeto[clave]}`);  // Imprime: Clave: a, Valor: 1; Clave: b, Valor: 2; Clave: c, Valor: 3
}

// Bucle for...of

// El bucle for...of se utiliza para iterar sobre los valores de un objeto iterable (como un array, un string, etc.).

const array = [10, 20, 30, 40, 50];
for (const valor of array) {
    console.log(`Valor: ${valor}`);  // Imprime: Valor: 10, Valor: 20, Valor: 30, Valor: 40, Valor: 50
}

// Interrupción de Bucles

// La instrucción break se utiliza para salir de un bucle antes de que se complete.

for (let m = 0; m < 10; m++) {
    if (m === 5) {
        break;  // Sale del bucle cuando m es igual a 5
    }
    console.log(`m: ${m}`);  // Imprime: m: 0, m: 1, m: 2, m: 3, m: 4
}

// La instrucción continue se utiliza para saltar a la siguiente iteración del bucle.

for (let n = 0; n < 10; n++) {
    if (n % 2 === 0) {
        continue;  // Salta las iteraciones donde n es par
    }
    console.log(`n: ${n}`);  // Imprime: n: 1, n: 3, n: 5, n: 7, n: 9
}

// Bucles Anidados

// Los bucles anidados se utilizan cuando necesitas iterar sobre múltiples niveles de datos.

for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
        console.log(`x: ${x}, y: ${y}`);  // Imprime todas las combinaciones de x e y
    }
}

// Resumen de Conceptos:

// - El bucle for se compone de inicialización, condición y actualización, y se utiliza para iteraciones definidas.
// - El bucle while ejecuta el bloque de código mientras la condición sea verdadera.
// - El bucle do...while garantiza que el bloque de código se ejecute al menos una vez.
// - El bucle for...in itera sobre las propiedades enumerables de un objeto.
// - El bucle for...of itera sobre los valores de un objeto iterable.
// - Las instrucciones break y continue se utilizan para interrumpir o continuar la ejecución de un bucle respectivamente.
// - Los bucles anidados se utilizan para iterar sobre múltiples niveles de datos.