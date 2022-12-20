function getData() {
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var category = document.getElementById("cat").value;
  console.log(name, price, category);
  var data = {
    name: name,
    price: price,
    category: category,
  };
  fetch("http://localhost:6001/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}
