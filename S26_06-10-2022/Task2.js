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
};

//print Hitech city value
console.log(details.address.city.area2);
