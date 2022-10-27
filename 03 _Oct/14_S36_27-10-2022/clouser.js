function fn() {
  //outer function
  var city = "hyd";
  function f1() {
    //inner function
    var email = "s@gmail.com";
    console.log(city);
  }
  return f1;
}

var f = fn();
console.log(f);
f();
