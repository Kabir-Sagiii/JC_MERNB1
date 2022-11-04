function f1() {
  //Asynchronous
  setTimeout(function () {
    for (var i = 1; i <= 10000; i++) {
      console.log(i);
    }
  }, 1000);

  console.log("Executed at end");
}

f1();
