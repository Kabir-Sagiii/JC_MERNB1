var details = {
    name: "Kabir",
    email: "Kabir@gmail.com",
    address: {
      city: {
        name: "Hyderabad",
        area1: "Begumpet",
        area2: "Hitech City",
        area3: "Jubli Hills",
      },
      state: "MH",
      country: "India",
    },
    marks: [
      {
        html: 60,
        css: 80,
        js: 95,
      },
      {
        html: 70,
        css: 90,
        js: 85,
      },
      {
        html: 20,
        css: 20,
        js: 15,
      },
    ],
  };
  
  //print marks  3rd element
    console.log(details.marks[2]);
  
  //update the  value of 2nd element of marks property js to 98 

    details.marks[2].js = "98";


  
  
  