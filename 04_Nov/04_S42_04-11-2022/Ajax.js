function getUsers() {
  var res;
  var obj = new XMLHttpRequest();
  obj.open("get", "https://randomuser.me/api/?results=10");
  obj.send();
  obj.onload = function () {
    res = obj.responseText;
    res = JSON.parse(res);
    console.log(res.results);
    createRows(res.results);
  };
  obj.onerror = function (error) {
    console.log(error);
  };

  //ajax
}

function createRows(data) {
  var table = document.getElementById("table");
  data.forEach(function (element) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    var img = document.createElement("img");
    img.src = element.picture.medium;
    img.width = "100";
    img.height = "100";
    console.log(img.src);
    td1.append(img);
    td2.append(element.name.first);
    td3.append(element.gender);
    td4.append(element.email);
    td5.append(element.phone);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
  });
}
