// 해시 테이블 생성
const table = {};

// 해시 테이블 원소 추가
table["key1"] = 100; // { key1: 100 }
table["key2"] = "Hello"; // { key1: 100, key2: 'Hello' }
table["key3"] = true; // { key1: 100, key2: 'Hello', key3: true }

// 해시테이블 원소 삭제
delete table["key1"]; // { key2: 'Hello', key3: true }
console.log(table["key1"]); // undefined

// 해시 테이블 출력
console.log(table); // { key2: 'Hello', key3: true }
console.log(Object.entries(table)); // [ [ 'key2', 'Hello' ], [ 'key3', true ] ]
console.log(Object.keys(table)); // [ 'key2', 'key3' ]
console.log(Object.values(table)); // [ 'Hello', true ]
