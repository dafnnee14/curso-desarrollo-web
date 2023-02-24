<?php
session_start();
include 'conexion.php';

if (isset($_SESSION['logged']) && $_SESSION['usertype'] == 'admin') {
    $sql = 'SELECT * FROM usuarios';
} elseif ($_SESSION['usertype'] == 'user') {
    $user = $_SESSION['username'];
    $sql = "SELECT * FROM usuarios WHERE nombre = '$user'";
}
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla con base de datos</title>


    <?php include 'styles.php'; ?>
</head>

<body>

    <h1>Tabla de los usuarios de la BD</h1>
    <table>

        <?php
        if ($result->num_rows > 0) {
            echo "<tr>
            <th>nombre</th>
            <th>contraseña</th>
            <th>tipo de usuario</th>
            <th>modificar</th>
            </tr>";
            // imprimir los datos de cada fila
            while ($row = $result->fetch_assoc()) {
                echo "<tr> <td>" . $row['nombre'] . "</td>" .
                    "<td>" . $row['password'] . "</td>" .
                    "<td>" . $row['user_type'] . "</td> 


                        <td> <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
                        width='24' height='24'
                        viewBox='0 0 24 24'>
                            <path d='M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z'></path>
                        </svg></td> 
                        
                        </tr>";
            }
        }

        $conn->close();


        ?>
    </table>


</body>

</html>