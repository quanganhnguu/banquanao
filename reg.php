<?php
 require 'themvaosql/ketnoi.php';
if (isset($_POST['btn-reg'])) {
    echo "<pre>";
    print_r($_POST);
    $fullname = $_POST['fullname'];
    $username =$_POST['username'];
    $password =$_POST['password'];
    $email =$_POST['email'];
    $sodienthoai =$_POST['sodienthoai'];
    $address =$_POST['address'];
     $sql ="INSERT INTO `bang_user` (`fullname`,`username`,`password`,`email`,`numberphone`,`address`)
      VALUES('$fullname','$username','$password','$email','$sodienthoai','$address') " ;


      if($conn ->query($sql)===TRUE ){
           echo "Đăng ký tài khoản thành công  ";
           
   
      } else{
        echo "Lỗi {$sql}".$conn->error;
                }
            }

    

?>
<html>
<p> <a href="dangnhap.php">Đăng nhập ngay</a></p>
  </html>
