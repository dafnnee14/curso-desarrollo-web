// const y let
const precio1 = 5;   // Esta variable nunca va a cambiar
const precio2 = 6;
let total = precio1 + precio2; //res = 11
// Esta variable puede cambiar
total = precio1 * 2 + precio2;  // res = 16
console.log(total);


// Si tratamos de asignar nuevos valores a las variables constantes, nos dará un error y código se detendrá
// precio1 = 10;
// console.log("hola");


// números y strings
const pi = 3.14;
// Sabemos que esta variable contendrá un valor constante
let nombre = "Alan"
let edad = 19;

console.log(edad + pi);
// Suma de dos números
edad = "19"
// Ahora estoy escribiendo el número como un string
console.log(edad + pi);
// Suma de número y string res = 343.14


// valor undefined
let coche;
// Hemos declarado la variable pero no le hemos asignado ningún valor

console.log(coche);