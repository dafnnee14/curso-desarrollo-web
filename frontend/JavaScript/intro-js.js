function colorChange() {
    document.getElementById("pColor").style.color = "#aabbcc";
    document.getElementById("pColor").style.backgroundColor = "rgb(60, 60, 60)";
}

function showDate() {
    document.getElementById("pDate").innerHTML = new Date();
}

function hideShow() {
    var condition = document.getElementById("pHide").style.visibility;

    if (condition == "hidden") {
        document.getElementById("pHide").style.visibility = "vidible";
    } else {
        document.getElementById("pHide").style.visibility = "hidden"
    }
}

// Interruptor de la luz

// declaramos las variables y guardamos los datos
// esto ocurrirá cuando se cargue el documento en el navegador 
var bombilla = document.getElementById("bulb");
var estado = "apagada";
// estas dos variables guardan una cadena de texto para ahorrar tiempo

function ligthSwitch() {
    if (estado == "apagada") {
        bpmbilla.src = encendida;
        estado = "apagada";
    }
}
// function encender() {
//    document.getElementById("bulbOn").style.display ="block";
//    document.getElementById("bulbOn").style.display ="none"
// }
// function apagar() {
//    document.getElementById("bulbOn").style.display = "none"
//    document.getElementById("bulbOn").style.display = "block"
// }
