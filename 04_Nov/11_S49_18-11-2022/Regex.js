//Character classes

//   \w , \w+  \W, \W+ ,\d, \d+ , \D, \D+ ,\s , \s+  \S, \S+  //

//  \w: word character , alphabets,number,_

// let regex = /\wagar/g; // sagar  9agar _agar

// let regex = /\w+agar/g;
// let regex = /\W2121\W/g;
// let regex = /\W+2121\W/g; // \W Non Word Character     *2121

// let regex = /\djs/gi; //  7js

// let regex = /^[^\dabc]{3}js\d+/gi; //

// let text = "u9abc9abc9abcjs99_HelloS999agar   xyzxyzxyzjs9";

// let regex = /\Dxyz/g; // Xxyz

let regex = /\SSoftware/;

let text =
  "I amSoftware Developer at Xxyz Company and Xxyz is Product based company";

let res = text.match(regex);

console.log(res);
