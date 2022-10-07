function checkCondition(data) {
  var productDetails = [
    {
      name: "Laptop",
      price: 300,
    },
    {
      name: "Mobile",
      price: 150,
    },
    {
      name: "TShirt",
      price: 100,
    },
  ];

  if (data === productDetails[0].name) {
    //TV === Laptop
    console.log(productDetails[0]);
  } else if (data === productDetails[1].name) {
    console.log(productDetails[1]);
  } else if (data === productDetails[2].name) {
    console.log(productDetails[2]);
  } else {
    console.log("Product is out of Stock");
  }
}

checkCondition("TV");
