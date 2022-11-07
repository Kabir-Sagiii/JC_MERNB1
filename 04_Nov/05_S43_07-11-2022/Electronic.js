//API : https://fakestoreapi.com/products/category/electronics
//MEthod Type : get

function getElectronicData() {
  // Ajax  or fetch()

  var promise = fetch("https://fakestoreapi.com/products/category/electronics");

  promise
    .then(
      function (data) {
        //binary format //001010101010101  //json
        return data.json();
      },
      function (errordata) {}
    )
    .then(function (actualData) {
      var result = actualData;
      console.log(actualData);
    });
}
