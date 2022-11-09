function getProductData() {
  var id = sessionStorage.getItem("id");
  var img = document.getElementById("img");

  var name = document.getElementById("name");
  var price = document.getElementById("price");
  var Cate = document.getElementById("cat");
  var des = document.getElementById("des");
  var rate = document.getElementById("rate");

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      img.src = data.image;
      name.innerText = data.title;
      price.innerText = "$ " + data.price;
      Cate.innerText = data.category;
      des.innerText = data.description;
      rate.innerText = data.rating.rate;
    });
}
