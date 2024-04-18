<?php
$host ="localhost";
$username ="root";
$password ="";
$themvaosqlname ="luu_kholam";

$conn =new mysqli($host, $username, $password, $themvaosqlname );
if($conn ->connect_error){
die("Kết nối không thành công: ". $conn->connect_error);

}

?>