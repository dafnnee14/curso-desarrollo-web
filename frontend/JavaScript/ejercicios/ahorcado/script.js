// Creamos un array con las distintas palabras del juego
const palabras = [
    "perro",
    "conejo",
    "gato",
    "oso",
    "pollo",
    "langostino",
    "murcielago"
]

const pollo = [
    "p",
    "o",
    "l",
    "l",
    "o"
]

// Imprimir la palabra en pantalla
// Guardo el contenedor donde la vamos a mostrar
let displayPalabra = document.getElementById('palabra');

// Elegimos una palabra del array
// Escojer un número al azar
let random = Math.random(); // 0 - 1 incluyendo decimales 
random = Math.random() * palabras.length; // 0 - 6 incluyendo decimales
// redondeamos el valor de random para eliminar los decimales, creando así un número válido para el índice del array
random = Math.floor(Math.random() * palabras.length); // 0 - 5 sin decimales

// Cada vez que se carga la página, se selecciona un ítem del array con el índice aleatorio
let palabra = palabras[random];

// Imprimimos la palabra
// Contamos la longitud de la palabra (número de letras que tiene)
let longitud = palabra.length;
// console.log(longitud);

// Declaro una variable para imprimir los guiones
let texto = "";
for (let indice = 0; indice < longitud; indice++) {

    // Guardo un guión en la variable por cada letra que tiene nuestra palabra
    texto += "_";
}

// Se imprimen los guiones, ocultando la palabra de juego
displayPalabra.innerHTML = texto;



// BOTONES
// Vamos a asignar el evento click a cada botón desde js 
// Así nos ahorramos tener que escribir en cada botón en HTML un "onclick"

// con clases
// Seleccionamos todos los elementos que tengan una clase
// Al guardar elementos por clase, me los devuelve en un ARRAY  
// const botones = document.getElementsByClassName('btn');

// Seleccionamos los HIJOS del div "tablero"
// Los hijos son todos los botones que contiene el div
const botones = document.getElementById('tablero').childNodes;

// Vamos a añadir en Event Listener a cada botón
// Event Listener es asignarle un tipo de evento al elemento HTML que ejecutará un bloqque de código cuando el evento se cumpla
// Por ejemplo, al hacer click sobre un botón o cuando pasemos el cursor por encima (hover)

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", test)
}

function test() {
    console.log("Has pulsado un botón");

    // Tomamos el contexto del botón con this
    // Guardamos la letra que contiene el botón en una variable
    let letra = this.innerHTML;
    // Transformo la letra en minúscula
    letra = letra.toLowerCase();

    let texto = "";

    // Recorremos la palabra, caracter a caracter, en busca de coincidencias con la letra pulsada
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);

        // Comprobamos si la letra de la palabra coincide con la letra del btn
        if (palabra[i] == letra) {
            console.log("Hay una coincidencia!");
            texto += letra;
        } else {
            // Si entra en el else, es que no han habido coincidencias
            texto += "_";
        }
    }

    displayPalabra.innerHTML = texto;

    console.log(letra);
}
