// Switch Case en JavaScript

// La instrucción switch se utiliza para realizar diferentes acciones basadas en diferentes condiciones.
// Es una alternativa a las múltiples sentencias if...else if cuando se tienen muchas condiciones basadas en el mismo valor.

// Sintaxis básica de switch:

/*
switch (expresión) {
    case valor1:
        // Bloque de código para el caso valor1
        break;
    case valor2:
        // Bloque de código para el caso valor2
        break;
    default:
        // Bloque de código para el caso por defecto
}
*/

// Ejercicio utilizando switch case:

// De acuerdo a un número dado, informar al usuario a qué estación del año corresponde.

let mes = 6;
let estacion;

switch (mes) {
    case 1:
    case 2:
    case 12:
        estacion = "Verano";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Otoño";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Invierno";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Primavera";
        break;
    default:
        estacion = "Valor incorrecto";
}

console.log(`La estación del año corresponde a: ${estacion}`);


// Resumen de Conceptos:

// - La instrucción switch evalúa una expresión y ejecuta el bloque de código asociado al primer caso coincidente.
// - Cada caso debe terminar con una instrucción break para evitar que la ejecución continúe en los siguientes casos.
// - El caso default se ejecuta si ningún caso coincide, y es opcional pero recomendable.
// - switch es útil para simplificar la lógica cuando se tienen múltiples condiciones basadas en el mismo valor.
