// print "Robinson Rd",
// print "w15kHgSm",
//print medium property value

var results = [
  // how many elements i have
  {
    gender: "female",

    name: {
      title: "Ms",
      first: "Lori",
      last: "Alexander",
    },
    location: {
      //results[0].location.street.name
      street: {
        number: 8962,
        name: "Robinson Rd",
      },
      city: "Rockhampton",
      state: "Western Australia",
      country: "Australia",
      postcode: 3019,
      coordinates: {
        latitude: "-84.8949",
        longitude: "30.1381",
      },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "lori.alexander@example.com",
    login: {
      uuid: "90cfebbf-c5de-4281-b36c-ceb0be618bd8",
      username: "silverrabbit894",
      password: "goth",
      salt: "w15kHgSm",
      md5: "65f091fa6a48fd56c7e89d683dc7ca94",
      sha1: "277dbd30c99df0e0dc9745a2a4fa83ae45299236",
      sha256:
        "d798d35f17a94ab360ccd4d3e20979c514ab6bd8147bc059db28b025af74bf80",
    },
    dob: {
      date: "1987-03-02T21:15:44.053Z",
      age: 35,
    },
    registered: {
      date: "2003-05-17T12:25:06.077Z",
      age: 19,
    },
    phone: "09-4057-8508",
    cell: "0449-774-396",
    id: {
      name: "TFN",
      value: "919384308",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/68.jpg",
    },
    nat: "AU",
  },
];

console.log(results[0].location.street.name);
console.log(results[0].login.salt);
console.log(results[0].picture.medium);
