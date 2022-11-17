// declaramos constantes con los elementos a utilizar
const input = document.getElementById('input');
const numbers = document.querySelectorAll('.numbers button');
const operators = document.querySelectorAll('.operators button');
const result = document.getElementById('equal');
const clear = document.getElementById('clear');

// mostramos un valor por defecto
input.value = 0;

// variables para guardar los valores y los resultados
let value1, value2 = 0;
let operator = '';

// asignamos un event listener a los botones de números
// hacemos un bucle que recorra el array entero y asigne el evento a cada botón
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', write)
}

function write() {
    console.log(this.innerHTML);

    // limpio la pantalla si sólo hay un cero
    if (input.value == 0) {
        input.value = '';
    }

    input.value += this.innerHTML;

}

// limpiar la pantalla al pulsar el botón C
clear.onclick = () => {
    input.value = 0;
    value1, value2 = 0;
    operator = '';
}


// aignamos eventos a los operadores
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', operate)
}

function operate() {
    // lo primero es identificar el operador que hemos clicado
    operator = this.innerHTML;
    value1 = parseFloat(input.value);   // un float es un numero con decimales
    input.value = '';
    console.log(operator);

    // if (operator == '+') {
    //     // se suma
    // } else if (operator == '-') {
    //     // se resta
    // } else if (operator == '×') {
    //     // se multiplica
    // } else if (operator == '÷') {
    //     // se divide
    // }

    // switch (operator) {
    //     case '+':
    //         // se suma
    //         console.log('has pulsado la suma');
    //         break;
    //     case '-':
    //         // se resta
    //         break;
    //     case '×':
    //         // se multiplica
    //         break;
    //     case '÷':
    //         // se divide
    //         break;

    //     default:
    //         console.log('el operador ha fallado');
    //         break;
    // }

}

result.onclick = () => {
    value2 = parseFloat(input.value);

    switch (operator) {
        case '+':
            // se suma
            console.log('has pulsado la suma');
            console.log(value1)
            console.log(value2)
            input.value = value1 + value2;
            break;
        case '-':
            // se resta
            input.value = value1 - value2;
            break;
        case '×':
            // se multiplica
            input.value = value1 * value2;
            break;
        case '÷':
            // se divide
            input.value = value1 / value2;
            break;

        default:
            console.log('el operador ha fallado');
            break;
    }
}