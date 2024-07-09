<?php

$con=mysqli_connect("localhost","root","","chaithu");
if($con)
{
    echo "Connection Successfull";
}
else
{
    echo "No connection";
}

//$query="CREATE DATABASE `chaithu`";
//$query="CREATE TABLE `user_details`(name varchar(30),number varchar(30),email varchar(30),address varchar(30))";
//mysqli_query($con,$query);

$query="insert into `user_details`(`name`,`number`,`email`,`address`) values(?,?,?,?)";
$stmt=mysqli_prepare($con,$query);
mysqli_stmt_bind_param($stmt,'ssss',$username,$phone_no,$email,$address);

$username=$_POST["name"];
$phone_no=$_POST["number"];
$email=$_POST["email"];
$address=$_POST["address"];

mysqli_stmt_execute($stmt);

session_start();
$_SESSION['user']=$_POST["name"];

if (!isset($_SESSION["user"])) {
    header("Location: index.html"); // Redirect if not logged in
    exit();
}

$name = $_SESSION["user"];


?>
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h2>Thank you, <?php echo $name; ?>!</h2>
    <!--<a href="logout.php">Logout</a>-->
</body>
</html>
