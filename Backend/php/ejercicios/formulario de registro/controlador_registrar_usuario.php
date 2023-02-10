<?php

use function PHPSTORM_META\sql_injection_subst;

if (!empty($_POST["registro"])) {
    if (empty($_POST["nombre"]) or empty($_POST["apellido"]) or empty($_POST["usuario"]) or empty($_POST["clave"])) {
        echo '<div class="alerta">Uno de los campos está vacío</div>';}
    } else {
        $nombre=$_POST["nombre"];
        $apellido=$_POST["apellido"];
        $usuario=$_POST["usuario"];
        $clave=$_POST["clave"];
        $sql=$conexion->query(" insert into usuario(nombre,apellido,usuario,clave)values('','','','')");
        if ($sql==1) {
            echo '<div class="alerta">Uno de los campos está vacío</div>';
    } else {

    }
}
?>