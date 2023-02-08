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
} else if (empty(pass)) {
    header("Location: index.php?error=Password is required");
}else {
    echo "Valid input";
} else {
    header("Location: index.php");
    exit();
}



