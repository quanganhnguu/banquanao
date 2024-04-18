<?php
require 'themvaosql/ketnoi.php';
if (isset($_POST['btn-reg1'])){
$table = "bang_user";

$userInput = $_POST['username'];
$passInput = $_POST['password'];

$conn =new mysqli($host, $username, $password, $themvaosqlname );

if ($conn->connect_error) {
    die("Kết nối không thành công: " . $conn->connect_error);
}
$sql = "SELECT * FROM $table WHERE username = '$userInput' AND password ='$passInput'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while   ($row = $result->fetch_assoc()) {;
        // So sánh mật khẩu đã lưu và mật khẩu người dùng nhập vào
        if ($passInput === $row['password'] && $userInput === $row['username']) {
            // Đăng nhập thành công
            echo "Đăng nhập thành công!";
            header('location:giao-hangnam.html');
        } else {
            // Sai mật khẩu
            echo "Sai mật khẩu!";
        }}
    
} else {
    echo "Sai tài khoản hoặc mật khẩu !";
    echo "Vui lòng nhập chính xác thông tin";
}

$conn->close();}
?>
<html>
<p> <a href="dangnhap.php">Đăng nhập lại </a></p>
  </html>