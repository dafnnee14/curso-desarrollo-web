<?php
include_once('db.php');
// Recibo todos los datos del formulario
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];
$usuario = $_POST['usuario'];
$clave = $_POST['clave'];

echo "Los datos son los siguientes: <br>";
echo "$nombres, $apellidos, $direccion, $telefono, $usuario y $clave";


$connectar = conn(); // ejecuta las conexiones a la b.d.
$sql = "INSERT INTO usuarios (usuario, nombres, apellidos, direccion, telefono, clave)
VALUES ('$usuario', '$nombres', '$apellidos', '$direccion', '$telefono', '$clave')";
$result = mysqli_query($conectar, $sql) or trigger_error("Query Failed SQL- Error:" . mysqli_error($conectar));

echo "$sql";
