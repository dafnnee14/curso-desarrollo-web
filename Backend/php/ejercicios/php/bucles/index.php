<?php
// 1. Crear un bucle que imprima los números del 1 al 10
for ($i=0; $i < ; $i++) { 
    # code...
}ºº
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
$alcance = 6;
$producto = 1;
echo "<table><tr>";
for ($i = 1; $i <= $alcance; $i++) {
    echo "<td>";
    echo "$producto * $i = " . $producto*$i;
    echo "</td>";
}
echo "</tr>";
echo "</table>";
//  | 1 * 1 = 1 | 1 * 2 = 2 | 1 * 3 = 3... | 1 * 6 = 6 |
// ... 
//  | 6 * 1 = 6 | 6 * 2 = 12 | 6 * 3 = 18... | 6 * 6 = 36 | 


//  9. Crear un programa de PHP que imprima un tablero de ajedrez
// Pista: Usar una tabla con 270px de ancho y 30px como medida para las celdas -->


//  10. Crear un script que imprima la siguiente tabla 

// 11. Escribir un programa de PHP que itere los números del 1 al 50. Al imprimirlos, los múltiplos de 3 se sustituirán por 'Fizz', los múltiplos de 5 por 'Buzz' y los que sean múltiplos de 3 y 5 por 'FizzBuzz'.


declare(strict_types=1);

function FizzBuzz()
{
    for ($i = 1; $i <= 100; $i++) {
        if (isDivisibleBy3And5($i)) {
            print("fizzbuzz\n");
        } elseif (isDivisibleBy3($i)) {
            print("fizz\n");
        } elseif (isDivisibleBy5($i)) {
            print("buzz\n");
        } else {
            print($i . "\n");
        }
    }
}

function isDivisibleBy3(int $number): bool
{
    return ($number % 3) == 0;
}

function isDivisibleBy5(int $number): bool
{
    return ($number % 5) == 0;
}

function isDivisibleBy3And5(int $number): bool
{
    return ($number % 3) == 0 && ($number % 5) == 0;
}

FizzBuzz();
// 12. Crear un triangulo de Floyd
import Data.List (genericLength)
import Test.QuickCheck (Positive (Positive), quickCheck)
 
-- 1ª solución
-- ===========
 
trianguloFloyd1 :: [[Integer]]
trianguloFloyd1 = floyd 1 [1..]
  where floyd n xs = i : floyd (n+1) r
          where (i,r) = splitAt n xs
 
-- 2ª solución
-- ===========
 
trianguloFloyd2 :: [[Integer]]
trianguloFloyd2 = iterate siguienteF [1]
 
-- (siguienteF xs) es la lista de los elementos de la línea xs en el
-- triángulo de Floyd. Por ejemplo,
--    siguienteF [2,3]    ==  [4,5,6]
--    siguienteF [4,5,6]  ==  [7,8,9,10]
siguienteF :: [Integer] -> [Integer]
siguienteF xs = [a..a+n]
    where a = 1 + last xs
          n = genericLength xs
 
-- 3ª solución
-- ===========
 
trianguloFloyd3 :: [[Integer]]
trianguloFloyd3 =
  [[(n*(n-1) `div` 2) + 1 .. (n*(n+1) `div` 2)] | n <- [1..]]
 
-- 4ª solución
-- ===========
 
trianguloFloyd4 :: [[Integer]]
trianguloFloyd4 =
  scanl (\(x:_) y -> [x+y..x+2*y]) [1] [1..]
 
-- Comprobación de equivalencia
-- ============================
 
-- La propiedad es
prop_trianguloFloyd :: Positive Int -> Bool
prop_trianguloFloyd (Positive n) =
  all (== (trianguloFloyd1 !! n))
      [trianguloFloyd2 !! n,
       trianguloFloyd3 !! n,
       trianguloFloyd4 !! n]
 
-- La comprobación es
-- λ> quickCheck prop_trianguloFloyd
-- +++ OK, passed 100 tests.
 
-- Comparación de eficiencia
-- =========================
 
-- La comparación es
--    λ> (trianguloFloyd1 !! 5000) !! 5000
--    12507501
--    (1.47 secs, 2,505,005,752 bytes)
--    λ> (trianguloFloyd2 !! 5000) !! 5000
--    12507501
--    (0.79 secs, 2,416,259,176 bytes)
--    λ> (trianguloFloyd3 !! 5000) !! 5000
--    12507501
--    (0.00 secs, 1,809,152 bytes)
--    λ> (trianguloFloyd4 !! 5000) !! 5000
--    12507501
--    (0.01 secs, 3,517,896 bytes)
--
--    λ> (trianguloFloyd3 !! (10^7)) !! 0
--    50000005000001
--    (2.45 secs, 1,656,534,080 bytes)
--    λ> (trianguloFloyd4 !! (10^7)) !! 0
--    50000005000001
--    (10.86 secs, 5,302,760,752 bytes)