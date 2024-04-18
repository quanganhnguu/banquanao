const products = [
  {
    id: 1,
    name: 'Áo phông nữ trắng',
    image: 'https://bizweb.dktcdn.net/100/438/408/products/ao-thun-nu-tsn6194-tr1-5.jpg?v=1704250317213',
    price: '250,000'
    
  },
  {
    id: 2,
    name: 'Áo sơ mi nữ',
    image: 'https://bizweb.dktcdn.net/100/438/408/products/smn5090-xah-5.jpg?v=1638774013827',
    price: '700,000'
  },
  {
    id: 3,
    name: 'Áo khoác gió nữ',
    image: 'https://bizweb.dktcdn.net/100/438/408/products/akn5040-vag-5.jpg?v=1681354798630',
    price: '400,000'
  },
  {
    id: 4,
    name: 'Áo Polo phối cổ nữ',
    image: 'https://bizweb.dktcdn.net/100/438/408/products/ao-polo-nu-apn6162-ddo-8-yodyvn.jpg?v=1704250330533',
    price: '470,000'
  },
  {
      id: 5,
      name: 'Áo thun thu đông nam',
      image: 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atm5009-tkc-5.jpg?v=1704250436363',
      price: '650,000'  
  },
  {
      id: 6,
      name: 'Áo giữ nhiệt cao cổ nam',
      image: 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atm5149-den-5.jpg?v=1669263638447',
      price: '470,000'
  },
  {
      id: 7,
      name: 'Áo Polo nam',
      image: 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm5393-xhd-3.jpg?v=1690163754113',
      price: '370,000'
  },
  {
      id: 8,
      name: 'Áo Khoác nam',
      image: 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/akm5047-ddo-5.jpg?v=1704250393287',
      price: '490,000'
  },
  {
      id: 9,
      name: 'Áo Polo trẻ em',
      image: 'https://bizweb.dktcdn.net/100/438/408/products/apk5129-ddo-7.jpg?v=1704250576223',
      price: '270,000'
  },
  {
      id: 10,
      name: 'Áo khoác gió trẻ em',
      image: 'https://bizweb.dktcdn.net/100/438/408/products/akk5021-cam-11.jpg?v=1704250469397',
      price: '610,000'
  },
  {
      id: 11,
      name: 'Áo giữ nhiệt trẻ em',
      image: 'https://bizweb.dktcdn.net/100/438/408/products/ao-ni-tre-em-phoi-tay-so-mi-atk6184-nav-1.jpg?v=1704334623597',
      price: '170,000'
  },
  {
      id: 12,
      name: 'Áo nỉ giữ nhiệt trẻ em',
      image: 'https://bizweb.dktcdn.net/100/438/408/products/ao-ni-tre-em-phoi-tay-so-mi-atk6184-nav-1.jpg?v=1704334623597i',
      price: '570,000'
  }
];

let productInCart = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

function saveToLocalStorage () {
localStorage.setItem('products', JSON.stringify(productInCart));
}

//Index page
function renderProducts () {
let data = ``;
products.map(value => {
  data += `
    <div class='col-3'>
      <div class='card'>
        <img src='${value.image}' class='card-img-top' alt=''>
        <div class='card-body'>
          <h5 class='card-title'>${value.name}</h5>
          <p class='card-text'>${value.price}</p>
          <button onclick='addToCart(${value.id})' class='btn btn-primary'>Thêm vào giỏ hàng</button>
          <button onclick='redirectToDetails(${value.id})' class='btn btn-info'>Xem chi tiết</button>
        </div>
      </div>
    </div>
  `;
});
document.getElementById('products').innerHTML = data;
}
function redirectToDetails(id) {
// Chuyển hướng đến trang chi tiết sản phẩm dựa trên id
window.location.href = 'chi-tiet-san-pham.html?id=' + id;
}

function addToCart (id) {
let checkProduct = productInCart.some(value => value.id === id);

if (!checkProduct) {
  let product = products.find(value => value.id === id);
  productInCart.unshift({
    ...product,
    quantity: 1
  });
  saveToLocalStorage();
  calculatorTotal();
} else {
  let product = productInCart.find(value => value.id === id);
  let getIndex = productInCart.findIndex(value => value.id === id);
  productInCart[getIndex] = {
    ...product,
    quantity: ++product.quantity
  };
  saveToLocalStorage();
}
}

function calculatorTotal () {
document.getElementById('total').innerHTML = productInCart.length;
}

function indexLoadPage () {
renderProducts();
calculatorTotal();
}

//Cart page
function renderProductsToTable () {
let data = ``;
productInCart.map((value, index) => {
  data += `
    <tr>
      <td>${value.name}</td>
      <td><img width='100' src='${value.image}' alt=''></td>
      <td>${value.price}</td>
      <td>
        <button onclick='plusQuantity(${index})' class='btn btn-secondary'>+</button>
        <span class='mx-2'>${value.quantity}</span>
        <button onclick='minusQuantity(${index}, ${value.quantity})' class='btn btn-secondary'>-</button>
      </td>
      <td>${(value.quantity * value.price.replace(/,/g, '')).toLocaleString()}</td>
      <td><button onclick='deleteProductInCart(${index})' class='btn btn-danger'>Xóa</button></td>
    </tr>
  `;
});
document.getElementById('products-cart').innerHTML = data;
}

function plusQuantity (index) {
productInCart[index] = {
  ...productInCart[index],
  quantity: ++productInCart[index].quantity
};
saveToLocalStorage();
renderProductsToTable();
totalMoney()
}

function minusQuantity (index, quantity) {
if (quantity > 1) {
  productInCart[index] = {
    ...productInCart[index],
    quantity: --productInCart[index].quantity
  };
  saveToLocalStorage();
  renderProductsToTable();
  totalMoney()
} else {
  alert('Quantity min is 1');
}
}

function deleteProductInCart (index) {
productInCart.splice(index, 1);
saveToLocalStorage();
renderProductsToTable();
totalMoney()
}

function totalMoney () {
if (productInCart !== []) {
  let total = 0;
  for (let i = 0; i < productInCart.length; i++) {
    total += productInCart[i].quantity * productInCart[i].price.replace(/,/g, '');
  }
  document.getElementById("total-money").innerHTML = total.toLocaleString()
}
}

function cartLoadPage () {
renderProductsToTable();
totalMoney();
}