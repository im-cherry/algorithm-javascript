// 숫자 정렬
const numArray = [2, 1, 3, 10];
// let tempArray = [...numArray]; // 깊은 복사

numArray.sort((a, b) => a - b); // 오름차순 정렬
console.log(numArray); // [ 1, 2, 3, 10 ]

numArray.sort((a, b) => b - a); // 내림차순 정렬
console.log(numArray); // [ 10, 3, 2, 1 ]

// 문자열 정렬
const strArray = ["banana", "b", "boy", "apple", "Z"];

strArray.sort(); // 오름차순 정렬
console.log(strArray); // [ 'Z', 'apple', 'b', 'banana', 'boy' ]

strArray.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  if (a === b) return 0;
}); // 내림차순 정렬
console.log(strArray); // [ 'boy', 'banana', 'b', 'apple', 'Z' ]

// 객체 정렬
const objArray = [
  { name: "banana", price: 1000 },
  { name: "apple", price: 3000 },
  { name: "orange", price: 500 },
];

objArray.sort((a, b) => a.price - b.price); // 가격 오름차순
console.log(objArray);
/*
[
  { name: 'orange', price: 500 },
  { name: 'banana', price: 1000 },
  { name: 'apple', price: 3000 }
]
*/
