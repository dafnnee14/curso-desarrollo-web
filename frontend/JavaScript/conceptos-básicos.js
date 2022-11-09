// Uso de puntos y comas
let a, b, c;    // En esta línea estamos declarando 3 variables
a = 5;          // Asignamos el valor 5 a la variable a
b = 6;          // Asignamos el valor 6 a la variable b
c = a + b;      // Asignamos el resultado de sumar a y b, a la variable c

// Mientras usemos ; se pueden poner varias declaraciones en un misma línea
a = 5; b = 6; c = a + b;
// Esto es igual de válido pero por buenas prácticas no se usa

// Espacios en blanco
let persona = "Carlos";
let person = "Carlos";
// Alt + Shift + F indenta el código por nosotros, haciéndolo más legible

// Bloques de código
function bloque() {
    let test1 = 0;
    let test2;

    if (condition) {
        let test3;
    }

    //....
}