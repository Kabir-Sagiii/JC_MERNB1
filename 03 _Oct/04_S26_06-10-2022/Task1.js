var details = {
  name: "Kabir",
  email: "Kabir@gmail.com",
  address: {
    city: "Mumbai",
    state: "MH",
    country: "India",
  },
};

// Print City Value
console.log(details.address.city);

// Update email address and print it

details.email = "KabirUpdated@gmail.com";
console.log(details.email, details.name);

//insert new Property (pincode:435678) in address and print object
details.address.pincode = 435678;
console.log(details);

// delete state Property and print object
delete details.address.state;
console.log(details);
