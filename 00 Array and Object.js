// 배열
// 배열 생성
const arr1 = new Array(); // []
const arr2 = []; // []
const arr3 = [0, 1, 2, 3, 4]; // [0, 1, 2, 3, 4]
const arr4 = new Array(5); // [ , , , , ]
const arr5 = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const arr6 = Array.from(Array(5), (value, index) => index); // [0, 1, 2, 3, 4]

// 배열 추가와 삭제
const arr = [0, 1, 2]; // [0, 1, 2]

// push & pop
arr.push(3); // [0, 1, 2, 3]
arr.push(4, 5); // [0, 1, 2, 3, 4, 5];
arr.pop(); // [0, 1, 2, 3, 4]
arr.pop(); // [0, 1, 2, 3]

// unshift & shift
arr.unshift(-1); // [-1, 0, 1, 2, 3]
arr.unshift(-3, -2); // [-3, -2, -1, 0, 1, 2, 3]
arr.shift(); // [-2, -1, 0, 1, 2, 3]
arr.shift(); // [-1, 0, 1, 2, 3]

// 객체
// 객체 생성
const obj1 = new Object(); // {}
const obj2 = {}; // {}
const obj3 = { name: "임채은" }; // { name: "임채은" }

// 객체 추가와 삭제
const obj = { name: "임채은", age: 27 }; // { name: '임채은', age: 27 }

obj["email"] = "collcr@kakao.com"; // { name: '임채은', age: 27, email: 'collcr@kakao.com' }
obj.phone = "01012345678"; // { name: '임채은', age: 27, email: 'collcr@kakao.com', phone: '01012345678' }

delete obj.email; // { name: '임채은', age: 27, phone: '01012345678' }
delete obj["phone"]; // { name: '임채은', age: 27 }

// 객체의 키와 값 집합
const keys = Object.keys(obj); // [ 'name', 'age' ]
const values = Object.values(obj); // [ '임채은', 27 ]
