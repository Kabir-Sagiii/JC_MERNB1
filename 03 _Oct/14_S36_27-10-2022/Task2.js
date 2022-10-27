function productDetails() {
  var productName = "Iphone 14";
  var brandName = "Apple";
  var price = 110000;
  var qty = 12;
  var totalPrice = 0;
  function calculateTotalPrice(price, qty) {
    console.log(price * qty);
  }

  function displayDetails(name, bname, price, qty, totalprice) {
    console.log(name, bname, price, totalprice, qty);
  }

  calculateTotalPrice(price, qty);
  displayDetails();
}

function f1() {
  calculateTotalPrice(100, 4);
}

function f2() {
  calculateTotalPrice(220, 3);
}
f1();
f2();
