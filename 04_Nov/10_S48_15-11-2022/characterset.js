// var regex = /[a-z][0-9][a-zA-Z0-9]0/;

// var regex = /[^a-z]{3}[^0-9][a-zA-Z0-9]0/;

// var regex = /[abc]{3}/;

// var regex = /[^abc]{3}/;

var regex = /[abc]\*[a-zA-Z0-9]{3}/;

var text = "b@aaa";

var result = regex.test(text);
console.log(result);
