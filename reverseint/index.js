// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
// function reverseInt(n) {
//   var str = n.toString();
//   var reversed = '';
//   var sign = false;
//   var i = 0;
//   if (str.charAt(0) == '-') {
//     sign = true;
//     i = 1;
//   }
//   for (; i < str.length; i++) {
//     reversed = str.charAt(i) + reversed;
//   }
//   if (sign) reversed = '-' + reversed;
//   return parseInt(reversed);
// }

// Solution 2
// function reverseInt(n) {
//   var str = n.toString().split('').reverse().join('');

//   return n >= 0 ? parseInt(str) : parseInt(str) * -1;
// }

//Solution 3
function reverseInt(n) {
  var str = n.toString().split('').reverse().join('');

  return parseInt(str) * Math.sign(n); //Math.sign returns 1 if n is positive, return -1 if n is -ve;
}

module.exports = reverseInt;
