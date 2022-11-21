//global scope
// var city = "Mumbai";

//module scope
// export var city = "Mumbai"; //exporting the city variable

// export function fn() {
//   console.log("Fn function is from index.mjs file");
// }

// export default function add() {
//   console.log(100 + 200);
// }

var city = "Mumbai"; //exporting the city variable

function fn() {
  console.log("Fn function is from index.mjs file");
}

function add() {
  console.log(100 + 200);
}

export default add;
export { fn, city };
