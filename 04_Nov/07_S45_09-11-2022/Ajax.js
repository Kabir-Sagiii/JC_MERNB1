function getUsers() {
  // alert("Working");
  var data;
  var httpObj = new XMLHttpRequest();
  //create or prepare the request
  httpObj.open("get", "https://randomuser.me/api/?results=50");

  //send the request to server
  httpObj.send();

  // handle the response

  httpObj.onload = function () {
    data = httpObj.responseText; // "{results:[{},{},{}]}"   --- String

    data = JSON.parse(data); //  {results:[{},{},{}]}   ----  obejct

    console.log(data.results);
    createRows(data.results);
  };
}

function createRows(users) {
  document.getElementById("users").style.display = "block";
  var table = document.getElementById("table");

  users.forEach(function (element) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var img = document.createElement("img");

    img.src = element.picture.medium;
    img.width = "50";
    img.height = "50";
    img.style.borderRadius = "50%";

    td2.innerText = element.name.first + " " + element.name.last;
    td3.innerText = element.gender;
    td4.innerText = element.email;
    td5.innerText = element.phone;

    td1.appendChild(img);
    tr.align = "center";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
  });
}
