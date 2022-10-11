//print the values from 1 to 10

function print() {
  for (var i = 1; i <= 10; i++) {
    console.log(i); // 1 2 3 4 5 6 7 8 9 10
  }
  console.log("for loop got an end");
}

// print();

//print the values from 10 to 1
function printReverse() {
  for (var i = 10; i >= 1; i--) {
    console.log(i);
  }
}

printReverse();
