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
  console.log(num1 + num2 + this.num3);
}

// var fnAdd = fnAdd.bind(obj1);
// fnAdd(10, 20); // 10+ 20 + 100 = 130

// var fnAdd = fnAdd.bind(obj1, 50, 30);
// fnAdd(); // 50+ 30 + 100 = 180

// var fn = fnAdd.bind(obj3);
// fn(10, 20); //10+20+1000

// fnAdd.bind(obj2, 10, 30)();

fnAdd.bind(obj2)(100, 100);
