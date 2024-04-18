document.addEventListener('DOMContentLoaded', function () {
    // Khởi tạo giỏ hàng là một mảng trống
    let shoppingCart = [];
  
// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productName, price) {
    const product = {
      name: productName,
      price: price
    };
  

  // Thêm sản phẩm vào giỏ hàng
  shoppingCart.push(product);
  function addToCart() {
    // Lấy giá trị màu sắc, kích thước và số lượng
    const selectedColor = document.getElementById("color").value;
    const selectedSize = document.getElementById("size").value;
    const selectedQuantity = parseInt(document.getElementById("quantity").value);

    // Tạo đối tượng sản phẩm
    const product = {
        name: "Áo Thun Nữ Màu Trắng",
        color: selectedColor,
        size: selectedSize,
        price: 5000000, // Giá giảm giá
        quantity: selectedQuantity
    };

    // Thêm sản phẩm vào giỏ hàng (đoạn mã JavaScript của bạn)

    // Sau khi xử lý, chuyển hướng đến trang giỏ hàng
    window.location.href = "gio-hang.html";
}

  // Cập nhật số lượng sản phẩm và giá trị giỏ hàng
  updateCart();
  
    // Hàm cập nhật số lượng sản phẩm và giá trị giỏ hàng
    function updateCart() {
      const cartItemsElement = document.getElementById('cart-items');
      const totalQuantityElement = document.getElementById('total-quantity');
      const totalPriceElement = document.getElementById('total-price');
  
      // Xóa nội dung hiện tại của danh sách giỏ hàng
      cartItemsElement.innerHTML = '';
  
      // Tính tổng số lượng và giá trị giỏ hàng
      let totalQuantity = 0;
      let totalPrice = 0;
  
      // Duyệt qua danh sách sản phẩm trong giỏ hàng
      for (const product of shoppingCart) {
        const productElement = document.createElement('div');
        productElement.textContent = `${product.name} - ${product.price} VNĐ`;
        cartItemsElement.appendChild(productElement);
  
        // Cập nhật tổng số lượng và giá trị
        totalQuantity++;
        totalPrice += product.price;
      }
  
      // Hiển thị tổng số lượng và giá trị
      totalQuantityElement.textContent = totalQuantity;
      totalPriceElement.textContent = totalPrice.toLocaleString('en') + ' VNĐ';
    }
  
    // Gọi hàm cập nhật giỏ hàng khi trang được tải
    updateCart();
    // Chuyển hướng người dùng đến trang giỏ hàng
    window.location.href = 'cart.html';
    // Ví dụ: Thêm sản phẩm vào giỏ hàng khi trang được tải
    addToCart('Áo Thun Nữ Màu Trắng', 50000000);
    addToCart('Áo Sơ Mi Nữ Trắng', 3000000);
    addToCart('Áo len nữ', 500000);
  });
  