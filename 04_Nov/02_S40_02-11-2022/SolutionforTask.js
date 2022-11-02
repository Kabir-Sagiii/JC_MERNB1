function fnAdd(x, y, fnMul) {
  var result;
  setTimeout(function () {
    result = x + y;
    fnMul(result, 89);
  }, 3000);
}

function fnMul(resultOfFnAdd, num) {
  console.log(resultOfFnAdd * num);
}

fnAdd(10, 20, fnMul);
