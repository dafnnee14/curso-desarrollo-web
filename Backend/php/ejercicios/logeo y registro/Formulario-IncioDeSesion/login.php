<?php 

if (isset($_POST['uname'])) && isset(($_POST['password'])) {
 function validate($data) {
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
return $
 }};
 
 
$uname = validate($_POST['uname']);
$uname = validate($_POST['password']);

if (empty($uname)) {
    header("Location: index.php?error=User Name is required");
    exit();
} else {
    $sql = "SELECT * FROM users WHERE user_name='$uname' AND password ='$pass'";

    $result = mysqli_query($conn, $sql);

if (mysql_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
if($row['user_name'] === $uname && $row['password'] === $password) {
    # coder... 
}
}else{
    header("Loation: index.php?error=Incorrect User name or password");
    exit();
}
}else {
    header("Location: index.php");
    exit();
}



