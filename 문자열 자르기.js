// split([separator[, limit]])
const str1 = "Hello World";

console.log(str1.split(" ")); // [ 'Hello', 'World' ]
console.log(str1.split("")); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

// substring(indexStart[, indexEnd])
const str2 = "Mozilla";

console.log(str2.substring(1, 3)); // oz
console.log(str2.substring(2)); // zilla

// slice(beginIndex[, endIndex])
const str3 = "The quick brown fox jumps over the lazy dog.";

console.log(str3.slice(31)); // the lazy dog.
console.log(str3.slice(4, 19)); // quick brown fox
console.log(str3.slice(-4)); // dog.
console.log(str3.slice(-9, -5)); // lazy
