// 문자열 정렬
const strArray = ["바위", "가위", "보"];

strArray.sort();
console.log(strArray); // [ '가위', '바위', '보' ]

// 숫자 정렬
const numArray = [5, 9, 10, 3, 8, 3, 2];

numArray.sort();
console.log(numArray); // [10, 2, 3, 3, 5, 8, 9];

numArray.sort((a, b) => a - b); // 오름차순 정렬
console.log(numArray); // [2, 3, 3, 5, 8, 9, 10]

numArray.sort((a, b) => b - a); // 내림차순 정렬
console.log(numArray); // [10, 9, 8, 5, 3, 3, 2]
