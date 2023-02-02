<?php
// Configuración necesaria para acceder a la data base.
function conn()
{
    $hostname = "localhost";
    $usuariodb = "root";
    $passworddb = "";
    $dbname = "proyecto";

    // Generando la conexión con el servidor
    $conectar = mysqli_connect($hostname, $usuariodb, $passworddb, $dbname);
    return $conectar;
}
