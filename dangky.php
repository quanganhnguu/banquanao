

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Đăng ký tài khoản </title>
</head>
<body>

    <div id="wrapper">
        <div class="container">
            <div class="row">
                <form action="reg.php" method="POST" class="col-md-6 bg-light-subtle p-3 my-3">
                    <h1 class="text-center text-uppercase h3 py-3">
                     Đăng ký tài khoản </h1>
                     <div class="form-group">
                        <label for="fullname">Họ và tên</label>
                        <input type="text" name="fullname" id="fullname"
                        class="form-control" >                 
                        </div>
                     <div class="form-group">
                        <label for="username">Tên đăng nhập</label>
                        <input type="text" name="username" id="username"
                        class="form-control" required>
                     </div>
                     
                     <div class="form-group">
                        <label for="password">Mật khẩu</label>
                        <input type="password" name="password" id="password"
                        class="form-control" required>
                     </div>
                     <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email"
                        class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="sodienthoai">Số điện thoại</label>
                            <input type="text" name="sodienthoai" id="sodienthoai"
                            class="form-control" >
                         </div>
                        <div class="form-group">
                            <label for="address">Địa chỉ</label>
                            <input type="text" name="address" id="address"
                            class="form-control">
                     </div>
                    
                        <input type="submit" class="btn btn-primary btn-toolbar mt-lg-3" name="btn-reg" value="Đăng ký">
                       
                </form>
                <p>Đã có tài khoản? <a href="dangnhap.php">Đăng nhập ngay</a></p>
            </div>
        </div>
    </div>

</body>
</html>

   

    

</body>


</html>