<?php
//  6. Crear un programa que muestre todas las potenciales combinaciones de dos dígitos decimales,
// impresos separadospor coma
for ($i=0; $i < 10; $i++) {
    for ($i=0; $j < 10; $j++) {
        echo $i . $j;
        if($i != 9  $j != 9)echo ",";
    }
}
//  7. Escribir un programa que cuente el número de "r" de un string dado 
$text = "rarito";
for ($i=0; $i < strlen(); $i++) {
   if (substr($text, $i, 1)== 'r') $contador++;
}
echo "El string '$text' contiene $contador r";

//  8. Escribir un programa que cree automáticamente una tabla con las tablas de multiplicar con
// el alcance que nosotros le indiquemos 
// Ejemplo: Alcance 6. Primera fila de la tabla 
//  | 1 * 1 = 1 | 1 * 2 = 2 | 1 * 3 = 3... | 1 * 6 = 6 |
// ... 
//  | 6 * 1 = 6 | 6 * 2 = 12 | 6 * 3 = 18... | 6 * 6 = 36 | 


//  9. Crear un programa de PHP que imprima un tablero de ajedrez
// Pista: Usar una tabla con 270px de ancho y 30px como medida para las celdas -->


//  10. Crear un script que imprima la siguiente tabla 