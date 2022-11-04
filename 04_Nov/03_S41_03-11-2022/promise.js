function createPromise() {
  var promise = new Promise(function (x, y) {
    //x= resolve , y = reject
    // x({ name: "Darsh", id: 101 });
    //x(1000)
    // x([20, 30, 40, 50]);
    // y({
    //   msg: "error",
    //   status: false,
    // });
  });

  console.log(promise);
}

// createPromise();

function createPromise() {
  //How to create Promise
  var promise = new Promise(function (resolve, reject) {});

  console.log(promise);
}
