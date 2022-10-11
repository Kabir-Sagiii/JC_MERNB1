var obj = {
  name: "John",
  country: "USA",
  id: 101,
  email: "John@gmail.com",
};

for (var keys in obj) {
  console.log(keys, ":", obj[keys]);
}

console.log(Object.keys(obj));
