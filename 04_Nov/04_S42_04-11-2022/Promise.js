function usersData() {
  var promise = new Promise(function (resolve, reject) {
    var status = true;

    if (status) {
      resolve({
        headers: {},
        results: [
          {
            id: 101,
            name: "Darsh",
            gender: "male",
          },
          {
            id: 102,
            name: "Alina",
            gender: "female",
          },
          {
            id: 103,
            name: "Smaiksha",
            gender: "female",
          },
          {
            id: 104,
            name: "John",
            gender: "male",
          },
        ],
        status: true,
      });
    } else {
      reject({
        status: false,
        message: "Error while connecting with the database",
      });
    }
  });

  return promise; //resolve
}

function specificUserDetails(dataOfUsers) {
  //array
  var id = 109;

  var promise2 = new Promise(function (resolve, reject) {
    dataOfUsers.forEach(function (ele) {
      if (ele.id === id) {
        resolve({
          id: 101,
          name: "Darsh",
          gender: "male",
          email: "darsh@gmail.com",
          phone: 99999999,
          city: "Delhi",
          img: "https://tse4.mm.bing.net/th?id=OIP.fyka5GWjObWdsIhao7i7KQHaL1&pid=Api&P=0",
        });
      } else {
        reject({
          msg: "No user exist with given id",
        });
      }
    });
  });

  return promise2; //rejct
}

function personalDetails(user) {
  var promise3 = new Promise(function (resolve, reject) {
    if (Object.keys(user).length > 0) {
      resolve({
        id: 101,
        name: "Darsh",
        email: "Darsh@gmail.com",
        phone: 9999999999,
      });
    } else {
      reject("No data found in the given object");
    }
  });

  return promise3;
}

//what it wll return
var promise = usersData(); // it will return or not,

// promise
//   .then(
//     function (data) {
//       return specificUserDetails(data.results); //promise chain
//     },
//     function () {}
//   )
//   .then(
//     function (userInfo) {
//       return personalDetails(userInfo);
//     },
//     function (errorMsg) {
//       console.log(errorMsg);
//     }
//   )
//   .then(
//     function (personalDetails) {
//       console.log(personalDetails);
//     },
//     function (errorMsg) {
//       console.log(errorMsg);
//     }
//   );

promise //resolve
  .then(function (data) {
    return specificUserDetails(data.results); //promise chain
  })
  .then(function (userInfo) {
    return personalDetails(userInfo);
  })
  .then(function (personalDetails) {
    console.log(personalDetails);
  })
  .catch(function (errorMsg) {
    console.log(errorMsg);
  });
