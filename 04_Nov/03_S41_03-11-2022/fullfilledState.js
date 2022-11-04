function fnresolve() {
  var promise = new Promise(function (resolve, reject) {
    resolve([{ name: "Sagar" }, { name: "Kabir" }]);
  });

  console.log(promise);
}

fnresolve();
