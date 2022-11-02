function preCourse(id, testCallback) {
  // code to fetch the attandance details from database  //2 min  //500       //75 ---- test
  var attandanceScore = 95; //undefined
  if (attandanceScore >= 90) {
    testCallback();
  } else {
    console.log("Student did not Qualified for the Test due to low attanance");
  }
}

function test(trainingCallback) {
  //logic to fetch the test score details from the database  //200
  var testScore = 80;
  if (testScore >= 60) {
    trainingCallback();
  } else {
    console.log("Not Qualified for Training due to Low Score in the test");
  }
}

function training(placementCallback) {
  //get the training result
  var qualified = true;
  if (qualified) {
    placementCallback();
  } else {
    console.log("Not Qualified for Placement ");
  }
}

function placement(paymentCallback) {
  //logic to get the details of placement
  var isPlaced = true;
  if (isPlaced) {
    paymentCallback();
  } else {
    console.log("Let him get placed");
  }
}

function payment() {
  console.log("Payment Paid by student");
}

// preCourse(105, function () {
//   test();
// });

preCourse(105, function () {
  //50 callbacks   //   callback hell : difficult to maintain the code
  test(function () {
    // 300 lines
    training(function () {
      //Inversion of control
      //200
      placement(function () {
        //100 lines
        payment();
      });
    });
  });
});
