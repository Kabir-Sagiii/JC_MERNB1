class Employee {
  eName;
  eId;
  eSalary;
  eDesignation;

  constructor(ename, eid, esalary, edesignation) {
    this.eName = ename;
    this.eId = eid;
    this.eSalary = esalary;
    this.eDesignation = edesignation;
  }

  displayDetails() {
    console.log(this.eName, this.eId, this.eSalary, this.eDesignation);
  }
}

class Student {
  sname;
  sid;

  display() {
    console.log(this.sname, this.sid);
  }
}

var s1 = new Student();
s1.display();

var emp1 = new Employee("Darsh", 101, 75000, "SDE");
emp1.displayDetails();

var emp2 = new Employee("Riya", 102, 80000, "Testing Enginner");
emp2.displayDetails();

var emp3 = new Employee("Adam", 103, 90000, "Fullstack Developer");
emp3.displayDetails();

var emp4 = new Employee("Alina", 104, 95000, "DevOps Enginner");
emp4.displayDetails();
