<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro</title>
</head>

<body>


    <div>
        <form action="padre" method="POST" class="formulario">
            <h2>REGISTRAR</h2>
            <?php
            include("modelo/conexion_bd.php");
            include("controlador/controlador_regitsrar_usuario.php");
            ?>
            <div class="padre">
                <label for="">Nombres</label>
                <input type="text" name="nombre">
            </div>
            <div class="apellido">
                <label for="">Apellidos</label>
                <input type="text" name="apellido">
            </div>
            <div class="usuario">
                <label for="">Usuario</label>
                <input type="text" name="usuario">
            </div>
            <div class="clave">
                <label for="">Constraseña</label>
                <input type="text" name="clave">
            </div>
            <div class="cuenta">
                <input class="boton" type="submit" value="Registrar" name="Registro">
                <a href="login.php">Salir</a>
            </div>
        </form>
    </div>
</body>

</html>