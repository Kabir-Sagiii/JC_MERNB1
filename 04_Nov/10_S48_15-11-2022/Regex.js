// let regex = /^sagar/;

// var text = "sagar is a developer abc";

// var result = regex.test(text);
// var searchResult = text.search(regex);
// console.log(result);
// console.log(searchResult);

// let regex = /abc$/;

// let regex = /ka..ir/;
let regex = /ka*ir/;
// let regex = /ka*i*r*/;

// let regex = /kab?r?89/;
var text = "kaaaaaair";

var result = regex.test(text);
console.log(result);
