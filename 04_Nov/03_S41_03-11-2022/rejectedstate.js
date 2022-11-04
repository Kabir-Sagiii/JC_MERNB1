function fnreject() {
  var promise = new Promise(function (resolve, reject) {
    reject("Error Message");
  });

  console.log(promise);
}

fnreject();
