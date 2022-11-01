//student information in class

class PDStudent {
  name = "S1";
  id = 101;
  email = "S1@gmail.com";
  phone = 99999999;

  displayPD() {
    console.log(this.name, this.id, this.email, this.phone);
  }
}

class ADStudent extends PDStudent {
  city = "Mumbai";
  state = "MH";
  country = "India";

  displayAllDetails() {
    this.name = "Kabir";
    this.displayPD();

    console.log(this.city, this.state, this.country);
  }
}

var ads1 = new ADStudent();

ads1.displayPD();
ads1.displayAllDetails();
