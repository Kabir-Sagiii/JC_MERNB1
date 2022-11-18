// //arrow functions

// const myFun = () => {
//   console.log("Arrow function");
// };

// function fn() {}

// let fn = () => {};

// //Difference between normal function and arrow function

// myFun(() => {});

var user1 = ["Raj", 101, true, "Raj@gmail.com"];

var user1AdressDetails = ["Mumbai", "MH", "India", 989876];

var userDetails = [...user1, ...user1AdressDetails];
//spread operator in es6
// ...

// var user1AdressDetails = [...user1, "Mumbai", "MH", "India", 989876];
// console.log(userDetails);

var obj1 = {
  name: "Kabir",
  city: "Delhi", //50
  id: 101,
};

var obj2 = {
  ...obj1,
  email: "Kabir@gmail.com",
  name: "Darsh",
};

// console.log(obj2);

//Rest Parameter    //  ...c

const fn = (x, y, z, ...data) => {
  var total = 0;
  data.forEach(function (elemnt, index) {
    total = total + elemnt;
    console.log(elemnt);
  });
  console.log(total);
};
fn(1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13); // 1 2 3 or  3 5 6

//Diff btw rest is parameter(...) and spread is operator(....)

//es6
// let,const call apply bind oops, promise async await rest spread arrow functions
// ,module Scope, arrya destructuring and object destructuring, genrator functions //30min

//Javascript : perfect:

//css media queries, css units, meta tag

//git 2 to 3 sessions

//React(easy) : HTML CSS JS- fundamentals
