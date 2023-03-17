<?php
// Recogemos las variables enviadas por GET


// realizamos la conexión en la Base de Datos
$conn = new mysqli('localhost', 'root', '0000', 'verificaciones');

$sql = "SELECT * FROM empleados";

$result = $conn->query($sql);
echo "<table>
<tr>
<th>id</th>
<th>nombre</th>
<th>contraseña</th>
<th>email</th>
<th>estado</th>
</tr>";
// imprimir los datos de cada fila
if ($result -> num_rows > 0) {
    
    while ($row = $result->fetch_assoc()) {
        
        $estado = $row['estado'];
    
        // if (isset($_SESSION['logged']) && $_SESSION['tipo_usuario'] == 'admin') {
        if (true) {
            if ($row['tipo_usuario'] == 'admin') {
                $user1 = 'admin';
                $user2 = 'user';
            } else {
                $user1 = 'user';
                $user2 = 'admin';
            }
            $selector = "<select name='tipo_usuario'>
            <option name='usertype' value='" . $user1 . "'>" . $user1 . "</option>
            <option name='usertype' value='" . $user2 . "'>" . $user2 . "</option>
            </select>";
        }
    
        $fila = "<tr>";
            if ($estado == 'verificado') {
                $fila = "<tr style='background-color: green;' >";
            }
            echo $fila;
            if ($estado == 'incompleto') {
                $fila = "<tr style='background-color: yellow;' >";
            }
            echo $fila;
            if ($estado == 'sin subir') {
                $fila = "<tr style='background-color: red;' >";
            }
            echo $fila;
    
        echo "$fila <form action='update-user.php' method='post'>
                   <td>" . "<input name='id' hidden value='" . $row['id'] . "'>" . $row['id'] . "</td>" .
            "<td>" . "<input name='name' value='" . $row['nombre'] . "'>" . "</td>" .
            "<td>" . "<input name='password' value='" . $row['password'] . "'>" . "</td>" .
            "<td>" . "<input name='email' value='" . $row['email'] . "'>" . "</td>".
            "<td>" . "<input name='email' value='" . $row['estado'] . "'>" . "</td>
                  <td>";
            if(isset($selector)) echo $selector;
    
            "</td> 
                  </tr>";
    }
    echo "</table>";
}

$conn->close();

?>