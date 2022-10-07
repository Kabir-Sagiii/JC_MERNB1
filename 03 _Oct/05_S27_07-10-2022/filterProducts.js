var products = [
  {
    brand: "Apple",
    price: 500,
  },

  {
    brand: "Oneplus",
    price: 300,
  },

  {
    brand: "Vivo",
    price: 200,
  },

  {
    brand: "Apple",
    price: 800,
  },

  {
    brand: "Apple",
    price: 700,
  },
];

//print all the brand Apple related data

var filteredData = products.filter(function (element) {
  //element = {brand:"--",price:--}
  return element.brand === "Apple"; //element.brand or element.price
});

console.log(filteredData);
