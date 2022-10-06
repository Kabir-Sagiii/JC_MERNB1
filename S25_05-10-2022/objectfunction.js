var myObj = {}; // empty object

var obj = {
  add: function () {
    var num1 = 100;
    var num2 = 200;
    console.log(num1 + num2);
  },
  name: "Kabir",

  mul: function (x, y) {
    console.log(x * y);
  },
};

obj.add();
obj.mul(5, 8);

console.log();

// console is pre-defined object in javascript

// log is a function inside console object

//  var console  = {
//   log: function() {
//        --------------
//  }
//}
