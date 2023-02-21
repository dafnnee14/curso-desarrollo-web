<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tabla-getuser</title>
</head>

<body>


    <?php
    // Recogemos la variable enviada por GET
    $q = $_GET['q'];

    // realizamos la conexion a la BD
    $conn = mysqli_connect('localhost', 'root', '0000');
    if (!$conn) {
        // die('Error de conexión:' . mysqli_error($conn));
    }

    mysqli_select_db($conn, 'logeo_registro');
    $sql = "SELECT * FROM usuarios WHERE user LIKE $q OR
email LIKE $q ORDER BY id ASC";
$result = mysqli_query($conn, $sql);

// Imprimimos los datos en una tabla
echo "<table>


    <tr>
        <th>Nombre de usuario</th>
        <th>Email</th>
        <th>Permisos</th>
    </tr>";

    
while ($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['user'] . "</td>";
    echo "<td>" . $row['user'] . "</td>";
    echo "<td>" .  $row['user'] . "</td>";
    echo "</tr>";
}

echo "</table>";

mysqli_close($conn);
    ?>
</body>

</html>