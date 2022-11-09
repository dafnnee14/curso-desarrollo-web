function calcularPropina() {
    // Tomamos los datos que ha introducido el usuario
    let cuenta = document.getElementById('cuentaTotal').value;
    let servicio = document.getElementById('calidadServ').value;
    let personas = document.getElementById('numPersonas').value;

    // Calculo la propina que debe pagar cada uno y lo guardo en una letiable
    let resultado = cuenta * servicio / personas; //resultado = 1.43733
    // resultado = resultado.toFixed(2);          //resultado = 1.44  

    // Accedo al elemento donde quiero imprimir el resultado
    let parrafo = document.getElementById('pResultado');

    if (resultado > 0) {
        // Lo muestro porque está oculto por defecto
        parrafo.style.visibility = 'visible';
        // Y lo relleno con el texto que quiero mostrar
        parrafo.innerHTML = resultado.toFixed(2) + "€ por persona";
    }

    // Imprimimos los datos en la consola
    console.log(cuenta + " €");
}

// Para obtener la propina hay que multiplicar el gasto por la calidad del servicio para obtener el correspondiente porcentaje y, por tanto, la propina total

// Seguidamente dividir la propina entre el número de comensales para obtener lo que debe pagar cada uno