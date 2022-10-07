//print all the elements greater then 50

//    o/p : 90
//          87
//          99
//          57
//          85

//Print those elements which are in between 50 and 70
//Print those elements which are in between 20 and 60

var data = [40, 50, 90, 87, 45, 12, 23, 38, 26, 99, 57, 85];

data.forEach(function (ele) {
  ele > 50 ? console.log(ele) : 90;
});

var info = [
  {
    brandName: "Apple",
    modelName: "Iphone 14",
  },
  {
    brandName: "Apple",
    modelName: "Iphone 12pro",
  },
  {
    brandName: "Samsung",
    modelName: "samsungGalaxy",
  },
  {
    brandName: "OnePlus",
    modelName: "oneplus 10Pro",
  },
  {
    brandName: "Apple",
    modelName: "Iphone 13ProMax",
  },
];

//Print all Apple Brand Model Name
//Print Oneplus Brand Details
