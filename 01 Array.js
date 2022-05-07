// 배열 생성
const arr1 = []; // []
const arr2 = [1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]
const arr3 = new Array(5); // [ , , , , ]
const arr4 = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const arr5 = Array.from(Array(5), (_, index) => index); // [0, 1, 2, 3, 4]

const arr = [1, 2, 3];

// 배열 요소 추가
arr.push(4); // [1, 2, 3, 4]
arr.push(5, 6); // [1, 2, 3, 4, 5, 6]
arr.splice(3, 0, 128); // [1, 2, 3, 128, 4, 5, 6]

// 배열 요소 삭제
arr.pop(); // [1, 2, 3, 128, 4, 5]
arr.splice(3, 1); // [1, 2, 3, 4, 5];
