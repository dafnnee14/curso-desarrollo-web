// Montamos el canvas con alta resolución
var canvas = document.getElementById("canvas");
canvas.width = 1220 * 2;
canvas.heigth = 400 * 2;
canvas.style.width = 1220 + "px";
canvas.style.height = 400 + "px";
var ctx = canvas.getcontext("2d");

// Clases de cartas
class carta {
    //  La variable static pertenece a la clase
    static x = 50;
    static y = 50;

    constructor(valor, palo) {
        this.img = new Image();
        this.valor = valor;
        this.palo = palo;

    }
}

// variables que vamos a usar
var cartas = [];
var cartasJugador = [];
var cartasCrupier = [];
var indiceCarta = 0;
var palos = ["S", "H", "D", "C"];
//Generamos las cartas con los atributos valor y palo
for (i = 0; i < 4; i++) {
    for (j = l; j <= 13; j++) {
        cartas.push(new carta(j, palos[i]));
    }
}