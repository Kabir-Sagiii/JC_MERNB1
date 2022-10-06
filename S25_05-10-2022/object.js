// student Details :  name, emailid, id , isplaced

var studentDetails = {
  sname: "chris", // Kabir
  semail: "chris@gmail.com",
  id: 101, // 100
  isPlaced: true,
};

// console.log(studentDetails);

// How to access Value of specific Property

// ObjectName.<keyName>

// console.log(studentDetails.semail);

// console.log(studentDetails.isPlaced);

// Add or Insert new Property in the Object

//<objectName>.<keyname> = <value>
// console.log(studentDetails);
studentDetails.city = "Mumbai";

// console.log(studentDetails);

//update the exisiting Property Value

// <objectName>.<key> = <updated Value>

studentDetails.sname = "Kabir";
studentDetails.id = 100;

// console.log(studentDetails);

// Delete the Property from Object
delete studentDetails.isPlaced;
delete studentDetails.semail;
delete studentDetails.city;

// console.log(studentDetails);

var obj = {
  name: "s1", //string
  city: "c1",
  101: "hello", //string   // "name" "city" "101"
};

console.log(obj.name); // dot notation

console.log(obj["name"]); // square bracket Notation
console.log(obj["city"]);

// Diiference bewteen dot notation and square bracket notation
