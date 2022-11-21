function fn(x) {
  //   var ele1 = x[0];
  //   var ele2 = x[1];
  //   var ele3 = x[2];

  //Array Destructruing
  var [ele1 = "Riya", ele2 = "Alina", ele3 = "Raj", ele4, ele5 = "Kabir"] = x;

  //   console.log(a, b);

  console.log(ele1, ele2, ele3, ele4, ele5);

  //   console.log(x[0], x[1]);
}

// fn([10, 20, 30, 40]); // 10, 20

function fnObject() {
  var obj = {
    name: "Darsh",
    gender: "male",
    id: 101,
  };

  // Object  Destructuring

  let { gender, name } = obj;
  //   gender = "female";

  console.log(name, gender);
}
fnObject();
