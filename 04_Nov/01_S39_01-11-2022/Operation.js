class Operations {
  num1;
  num2;
  constructor(x, y) {
    //10,20
    this.num1 = x; //10
    this.num2 = y; //20
  }

  operation() {
    console.log(this.num1, this.num2);
  }
}

class AddOperation extends Operations {
  result;
  constructor() {
    super(10, 20);
    this.result = 0;
  }
  operation() {
    // super.operation();
    this.result = this.num1 + this.num2;
    console.log(this.result);
  }
  print() {
    super.operation();
    this.operation();
  }
}

class SubOperation extends Operations {
  subresult;
  constructor(x, y) {
    //200, 100
    super(10, 20);
    this.subresult = 0;
    // this.num1 = x; //200
    // this.num2 = y; //100
  }
  operation() {
    this.subresult = this.num2 - this.num1;
    console.log(this.subresult);
  }
}

var add1 = new AddOperation();
// add1.operation();
add1.print();

// var sub1 = new SubOperation(200, 100);
// sub1.operation();
