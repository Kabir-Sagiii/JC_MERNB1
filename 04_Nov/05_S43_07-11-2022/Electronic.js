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
      createCard(result);
    });
}

function createCard(data) {
  var card = document.getElementById("card");
  data.forEach(function (ele) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    div.style.width = "300px";
    div.style.height = "300px";
    img.src = ele.image;
    img.style.width = "100%";
    img.height = "300";
    div.append(img);
    div.style.border = "2px solid black";
    card.style.display = "grid";
    card.style.gridGap = "10px";
    card.style.padding = "30px";

    card.style.gridTemplateColumns = "1fr 1fr 1fr";
    card.appendChild(div);
  });
}
