// Operadores en JavaScript

// Los operadores son símbolos que se utilizan para realizar operaciones en los valores y variables.
// JavaScript admite varios tipos de operadores, incluyendo operadores aritméticos, de asignación, de comparación, lógicos y más.

// Operadores Aritméticos

// Los operadores aritméticos se utilizan para realizar cálculos matemáticos.

let a = 10;
let b = 5;

console.log(a + b);  // Suma: 15
console.log(a - b);  // Resta: 5
console.log(a * b);  // Multiplicación: 50
console.log(a / b);  // División: 2
console.log(a % b);  // Módulo: 0

// Operadores de Incremento y Decremento

let x = 10;

console.log(++x);  // Incremento: 11
console.log(x++);  // Imprime: 11, luego incrementa a 12
console.log(--x);  // Decremento: 11
console.log(x--);  // Imprime: 11, luego decrementa a 10

// Operadores de Asignación

// Los operadores de asignación se utilizan para asignar valores a las variables.

let y = 10;
y += 5;  // Equivalente a y = y + 5
console.log(y);  // Imprime: 15

y -= 5;  // Equivalente a y = y - 5
console.log(y);  // Imprime: 10

y *= 2;  // Equivalente a y = y * 2
console.log(y);  // Imprime: 20

y /= 2;  // Equivalente a y = y / 2
console.log(y);  // Imprime: 10

y %= 3;  // Equivalente a y = y % 3
console.log(y);  // Imprime: 1

// Operadores de Comparación

// Los operadores de comparación se utilizan para comparar valores y devuelven un valor booleano (true o false).

console.log(a == b);  // Igualdad: false
console.log(a != b);  // Desigualdad: true
console.log(a === 10);  // Estrictamente igual: true
console.log(a !== 10);  // Estrictamente desigual: false
console.log(a > b);  // Mayor que: true
console.log(a < b);  // Menor que: false
console.log(a >= 10);  // Mayor o igual que: true
console.log(a <= 10);  // Menor o igual que: true

// Operadores Lógicos

// Los operadores lógicos se utilizan para combinar expresiones booleanas y devuelven un valor booleano.

let verdadero = true;
let falso = false;

console.log(verdadero && falso);  // AND: false
console.log(verdadero || falso);  // OR: true
console.log(!verdadero);  // NOT: false

// Operadores de Bit

// Los operadores de bit realizan operaciones en el nivel de bits.

console.log(a & b);  // AND bit a bit: 0
console.log(a | b);  // OR bit a bit: 15
console.log(a ^ b);  // XOR bit a bit: 15
console.log(~a);  // NOT bit a bit: -11
console.log(a << 1);  // Desplazamiento a la izquierda: 20
console.log(a >> 1);  // Desplazamiento a la derecha: 5

// Operador Ternario

// El operador ternario es una forma abreviada de la instrucción if-else y devuelve un valor basado en una condición.

let edad = 18;
let esAdulto = (edad >= 18) ? 'Sí' : 'No';
console.log(esAdulto);  // Imprime: Sí

// Operador de Nullish Coalescing

// El operador de nullish coalescing (??) devuelve el operando de la derecha cuando el operando de la izquierda es null o undefined.

let nombre = null;
let nombrePorDefecto = nombre ?? 'Desconocido';
console.log(nombrePorDefecto);  // Imprime: Desconocido

// Operador de Encadenamiento Opcional

// El operador de encadenamiento opcional (?.) permite acceder a propiedades de objetos que podrían no existir sin causar un error.

let usuario = {
    perfil: {
        nombre: 'Ana'
    }
};

console.log(usuario?.perfil?.nombre);  // Imprime: Ana
console.log(usuario?.contacto?.telefono);  // Imprime: undefined

// Resumen de Conceptos:

// - Los operadores aritméticos se utilizan para realizar cálculos matemáticos.
// - Los operadores de asignación se utilizan para asignar valores a las variables.
// - Los operadores de comparación se utilizan para comparar valores y devuelven un valor booleano.
// - Los operadores lógicos se utilizan para combinar expresiones booleanas.
// - Los operadores de bit realizan operaciones a nivel de bits.
// - El operador ternario es una forma abreviada de la instrucción if-else.
// - El operador de nullish coalescing devuelve el operando de la derecha cuando el de la izquierda es null o undefined.
// - El operador de encadenamiento opcional permite acceder a propiedades de objetos que podrían no existir.

