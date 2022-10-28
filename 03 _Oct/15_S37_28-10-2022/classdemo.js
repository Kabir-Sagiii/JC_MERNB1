class Student {
  //1000  properties

  name; //  undefined
  city = "delhi";
  email = "K@gmail.com";
  marks = [20, 40, 90, 100];

  // 500 methods
  display() {
    console.log(this.name, this.city, this.email, this.marks);
  }

  print() {
    this.display();
  }
}

// I can create any number of objects, Each object represents one Student Information

//creating the object of the class (or)  //creating the instance of the class
var s1 = new Student();
console.log("s1", s1.city);

var s2 = new Student();
//updated the property of s2 instance (or) object
s2.city = "Mumbai";
console.log("s2", s2.city);

s1.display();
s2.display();
s2.print();

// console.log(s1, s2);
