<?php

if ($_SERVER['REQUEST_METHOD'] = 'POST') {
    // Recibimos las variables del form
    $user = $_POST['user'];
    $email = $_POST['email'];

    include 'conn.php';

    $sql = "SELECT * FROM usuarios WHERE user = '$user' AND email =' $email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Si hay un resultado, es que hay un usuario con esos datos
        echo '<p>Has iniciado sesión con éxito</p>';
        echo "<p>Bienvenido $user.";
    }
}
