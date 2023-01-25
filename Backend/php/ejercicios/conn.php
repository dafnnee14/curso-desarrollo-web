<?php
$servername = 'localhost';
$username = 'root';
$password = '0000';
$dbname = 'academia';

// Crear la conexion a la BD 
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobamos la conexion
if ($conn->connect_error){
    die("Fallo en la conexion: " . $conn->connect_error);
}else {
    $_SESSION['éxito'] = true;
    echo "conectado con éxito";
    echo $_SESSION['éxito'];
}
echo "Conectado con éxito <br>";
