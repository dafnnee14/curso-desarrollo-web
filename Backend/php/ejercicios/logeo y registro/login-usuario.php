<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] = 'POST') {
    include 'conexion.php';

    // Recibimos las variables del form
    $user = $_POST['user'];
    $password = $_POST['password'];

    // Hacemos la query para buscar si existe un usuario con estos datos
}
