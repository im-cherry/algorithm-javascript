// 해시 테이블 생성
const table = {};

// 해시 테이블 원소 추가
table["key"] = 100;
table["key2"] = "Hello";
table["key3"] = true;

console.log(table["key"]); // 100

// 해시 테이블 원소 삭제
delete table["key"];

console.log(table["key"]); // undefined

// 해시 테이블 출력
console.log(Object.entries(table)); // [ ["key2", "Hello"], ["key3", true]]
console.log(Object.keys(table)); // ["key2", "key3"]
console.log(Object.values(table)); // ["Hello", true]
console.log(table); // { key2: "Hello", key3: true }
