
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Đăng Nhập</title>
</head>

<body>
    <div id="wrapper">
        <div class="container">
                <form action="xulidangnhap.php" method="POST" class="col-md-6 bg-light-subtle p-3 my-3">
                    <h1 class="text-center text-uppercase h3 py-3">
    <h1 class="text-center">Đăng Nhập</h1>

    <form id="loginForm">
       
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
         <input type="submit" class="btn btn-primary btn-toolbar mt-lg-3" name="btn-reg1" value="Đăng Nhập">
    </form>

  
    <p>Chưa có tài khoản? <a href="dangky.php"> Bấm vào đây để đăng ký </a></p>
   
    


</body>

</html>