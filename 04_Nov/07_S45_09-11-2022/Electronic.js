//API : https://fakestoreapi.com/products/category/electronics
//MEthod Type : get

var productId;
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
      //   var result = actualData;
      console.log(actualData);
      createCard(actualData);
    });
}

function createCard(data) {
  var cardRef = document.getElementById("card");
  cardRef.style.display = "grid";
  cardRef.style.gridTemplateColumns = "1fr 1fr 1fr";
  cardRef.style.gridGap = "10px";
  data.forEach(function (ele) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var h4 = document.createElement("h4");
    var p = document.createElement("p");
    var p1 = document.createElement("p");
    var btn = document.createElement("button");
    var a = document.createElement("a");
    a.href = "ProductDetails.html";

    btn.onclick = function () {
      sessionStorage.setItem("id", ele.id);
    };

    img.src = ele.image;
    img.style.width = "100%";
    img.style.height = "200px";
    h4.innerText = ele.title;
    p.innerText = "$ " + ele.price;
    p1.innerText = ele.description;
    btn.innerText = "More Details";

    btn.style.textAlign = "center";

    a.appendChild(btn);
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(a);

    div.style.width = "300px";

    //   div.style.border = "4px solid black";
    div.style.boxShadow = "0 0 10px black";
    div.style.padding = "30px";
    div.style.backgroundColor = "lightgrey";
    cardRef.appendChild(div);
  });
}
