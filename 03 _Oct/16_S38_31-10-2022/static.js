class Student {
  name = "S";
  id = 0;
  static schoolName = "KnowledgeIT";
  static schoolCity = "Delhi";

  static printSchoolName_City() {
    console.log(Student.schoolCity, this.schoolName);
  }

  displayAllDetails() {
    console.log(this.name, this.id, Student.schoolCity, Student.schoolName);
  }
}

var s1 = new Student();
s1.displayAllDetails();
Student.printSchoolName_City(); //error
