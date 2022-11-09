// Creamos un array con las distintas palabras de juego
const palabras = [
    "perro",
    "gato",
    "ratón",
    "pollo",
    "conejo",
    "león"
]

// Imprimir la palabra en pantalla
// Guardo el contenedor donde la vamos a mostrar
let displayPalabra = document.getElementById("palabra");

// Elegimos una palabra del array
// Escogémos un número al azar
let random = Match.random(); // 0 - 1 incluyendo decimales
console.log(random); // 0 - 6 incluyendo decimales
// redondeamos el valor de random para eliminar los decimales,
//  creando así un número válido para el índice del array. 
random = Match.floor(Match.random() * 6); // 0- 5 sin decimales

// Cada vez que se carga la página, se selecciona un ítem del 
// array con el índice aletorio 

let palabra = palabras[3];

let texto

// Imprimimos la palabra
displayPalabra.innerHTML = palabra;