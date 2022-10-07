var age = [30, 50, 12, 8, 27, 24, 22, 15, 57, 84];

//print all the ages which are greater then 50

var newArray = age.filter(function (ele, index) {
  return ele > 50;
});

console.log(age);
console.log(newArray);
