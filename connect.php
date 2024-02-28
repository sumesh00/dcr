<?php
$Username =$_POST['Username'];
$email =$_POST['email'];
$password =$_POST['password'];
$statement =$_POST['statement'];


//database connection
$conn = new mysqli('localhost','root','','login');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt =$conn->prepare("insert int registration(Username, email, password, statement) values(?, ?, ?, ?)");
    $stmt->binfd_param("ssss",$Username, $email, $password, $statement);
    $stmt->execute();
    echo "registration Successfully...";
    $stmt->close();
    $conn->lose();
}
?>


//binding
i-integer
d-double 
s-string 
b-BLOB//