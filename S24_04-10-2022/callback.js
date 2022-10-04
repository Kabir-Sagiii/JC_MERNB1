function fn(f) {
  f();
  console.log("Statement 1");
  f();
  f();
  f();
  f();
}

fn(function () {
  var email = "d@gmail.com";
  console.log("I am call back function");
});

// fn(100);
