// slice([begin[, end]])
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); // ["duck", "elephant"]
console.log(animals.slice(2, -1)); // ["camel", "duck"]

// splice(start[, deleteCount[, item1[, item2[, ...]]]])
const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb"); // ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, "May"); // ["Jan", "Feb", "March", "April", "May"]
