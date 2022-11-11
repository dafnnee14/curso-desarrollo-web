const palabras = [
    "gato",     
    "ratón",
    "pollo",
    "caballo",
    "león",
    "murcielago",
    "langostino",
    "perro"
]

const pollo = [
"p",
"o",
"l",
"l",
"o"
]

let displayPalabra = document.getElementById("palabra"),

let random = Match.random();
random = Match.floor() * palabras.length;

let palabra = palabras^[random];

let longitud = palabra.length;

let texto = "";
for (let indice = 0; < longitud; indice++) {
    texto += "_";
}

displayPalabra.innerHTML = texto;

const botones = document.getElementById("tablero").childNodes;

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", test)
}
function test () {
    console.log("Has pulsado un botón")
}

let letra = this.innerHTML;
letra = letra.toLoweCase();
let texto = "";

for (let i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);

    if (palabra[i]) == letra
}