const display = document.getElementById("display")
const displayLetras = document.getElementById("displayLetras")

let texto = "";

// Queremos imprimir todos los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    texto += i + ", ";


}

display.innerHTML = texto;

display.innerHTML = texto;
// console.log(arrayNumeros)

const letras = [
"a",
"e",
"i",
"o",
"u"
]

texto = "";

for (let i = 0; i < letras.length; i++) {
    texto += letras[i] + " "; 
}

displayLetras.innerHTML = texto;