function createPromise() {
  var promise = new Promise(function (resolve, reject) {
    resolve([{ name: "Sagar" }, { name: "Darsh" }]);
  });

  return promise;
}

var promiseObj = createPromise();

promiseObj.then(
  function (resFromResolve) {
    console.log(resFromResolve);
  },
  function (resFromReject) {
    console.log(resFromReject);
  }
);
