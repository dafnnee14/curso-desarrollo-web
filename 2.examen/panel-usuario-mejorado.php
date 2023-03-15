<?php
session_start();
include 'conn.php' ;$id = $_SESSION['id'];
$tipo_usuario = $_SESSION['tipo_usuario'];

// valor por defecto, usuario
$sql = "SELECT * FROM EMPLEADOS WHERE id = $id";

// admin
if ($tipo_usuario == 'admin') $sql = "SELECT * FROM EMPLEADOS";
if ($tipo_usuario == 'colaborador') $sql = "SELECT * FROM EMPLEADOS WHERE tipo_usuario != 'admin'";

$result = $conn->query($sql);
