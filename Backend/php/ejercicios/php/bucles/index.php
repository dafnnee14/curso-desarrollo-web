<?php
// 1. Crear un bucle que imprima los números del 1 al 10
for ($i=0; $i < ; $i++) { 
    # code...
}
// 1.1 
//  1-2-3-4-5-6-7-8-9-10


// 2. Crear un bucle que sume todos los números del 0 al 30
def main() {
    print("PARES E IMPARES")
    numero_1 = int(input("Escriba un número entero: "))
    numero_2 = int(input(f"Escriba un número entero mayor o igual que {numero_1}: "))

    if numero_2 < numero_1:
        print(f"¡Le he pedido un número entero mayor o igual que {numero_1}!")
    else:
        for i in range(numero_1, numero_2 + 1):
            if i % 2 == 0:
                print(f"El número {i} es par.")
            else:
                print(f"El número {i} es impar.")


if __name__ == "__main__":
    main()
}
//  3. Crear un script que imprima el siguiente patrón:
// *
// * *
// * * *
// * * * *
// * * * * *
| 1 * 1 = 1 | 1 * 2 = 2 | 1 * 3 = 3... | 1 * 4 = 4 | 1 * 5 = 5 |


// 4. Crear un script que imprima el siguiente patrón:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
| 1 * 1 = 1 | 1 * 2 = 2 | 1 * 3 = 3... | 1 * 4 = 4 | 1 * 5 = 5 | 1 * 6 = 6... | 1 * 7 = 7 | 1 * 8 = 8 | 1 * 9 = 9 |

// 5. Crear un bucle que calcule el factorial de un número dado. El factorial de un número 
// es el producto de todos los naturales hasta llegar a dicho número
int iFactorial = 1;
for (int x=2;x<=iNumero;x++)
  iFactorial = iFactorial * x;
  System.out.println("El factorial del número " + Integer.toString(iNumero) +  " es " + Integer.toString(iFactorial));
// 4! = 4*3*2*1 = 24F
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
for f in range(1,11) {
	multiplicacion = 6 * f 
	print(f'6 x {f} = {multiplicacion}')
}
//  | 1 * 1 = 1 | 1 * 2 = 2 | 1 * 3 = 3... | 1 * 6 = 6 |
// ... 
//  | 6 * 1 = 6 | 6 * 2 = 12 | 6 * 3 = 18... | 6 * 6 = 36 | 


//  9. Crear un programa de PHP que imprima un tablero de ajedrez
// Pista: Usar una tabla con 270px de ancho y 30px como medida para las celdas -->


//  10. Crear un script que imprima la siguiente tabla 