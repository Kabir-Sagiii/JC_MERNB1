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

// fnAdd(90, 70, obj1); //obj1  // 260

// fnAdd(10, 50, obj2); //obj2  //560

// fnAdd(20, 30, obj3); //obj3 // 1050

// fnAdd(10, 20); // NAN (Not A Number)

fnAdd.call(obj1, 10, 20); // 10  +20 + 100 // 130

fnAdd.call(obj2, 30, 70); // 30+ 70+500 //600

fnAdd.call(obj3, 30, 70); // 30+ 70+1000 //1100
