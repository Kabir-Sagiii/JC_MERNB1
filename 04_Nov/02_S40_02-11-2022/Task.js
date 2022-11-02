function fnAdd(x, y) {
  //10   20
  var result; //undefined
  setTimeout(function () {
    result = x + y;
  }, 3000);
  return result; //undefined
}

function fnMul(resultOfFnAdd, num) {
  //undefined,8
  console.log(resultOfFnAdd * num); //NaN
}

var res = fnAdd(10, 20); //undefined
fnMul(res, 8); // undefined,8
