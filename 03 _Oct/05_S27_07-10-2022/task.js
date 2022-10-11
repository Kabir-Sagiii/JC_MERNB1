function awesome(memberId, age) {
  return tryThis(memberId, age);
}

function tryThis(memberId, age) {
  console.log(memberId, age);
  return memberId == "able" && age >= 18 ? tru() : fals();
}

awesome("able", 90)
  ? console.log("registered successfully")
  : console.log("oops" + " " + "you are not allowed");

function tru() {
  console.log(true);
  return true;
}

function fals() {
  console.log(false);
  return false;
}
