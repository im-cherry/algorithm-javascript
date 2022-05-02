// 배열 생성
let arr1 = [];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = new Array(5);
let arr4 = new Array(5).fill(0);
let arr5 = Array.from(Array(5), (value, index) => index);

console.log(arr1); // []
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(arr3); // [ , , , , , ]
console.log(arr4); // [0, 0, 0, 0, 0]
console.log(arr5); // [0, 1, 2, 3, 4]

// 배열 요소 추가
const arr = [1, 2, 3];
arr.push(4);
arr.push(5, 6);
arr.splice(3, 0, 128);

console.log(arr); // [1, 2, 3, 128, 4, 5, 6]

// 배열 요소 삭제
arr.splice(3, 1);
arr.pop();

console.log(arr); // [1, 2, 3, 4, 5]
