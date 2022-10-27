var obj1 = {
  num3: 100,
};

var obj2 = {
  num3: 500,
};

var obj3 = {
  num3: 1000,
};

function fnAdd(num1, num2) {
  console.log(num1 + num2 + this.num3); //10 + 20 + undefined = NaN
}
fnAdd.apply(obj1, [100, 100]); //300
fnAdd.apply(obj2, [100, 100]); //700
fnAdd.apply(obj3, [100, 100]); //1200
