function add(x, y, f1) {
  console.log(x + y);
  f1();
}

function fn() {
  console.log("I am a Positive Number", 98);
}

add(100, 400, fn);
