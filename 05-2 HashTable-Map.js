// 해시 테이블 생성
const table = new Map();

// 해시 테이블 원소 추가
table.set("key1", 100); // Map(1) { 'key1' => 100 }
table.set("key2", "Hello"); // Map(2) { 'key1' => 100, 'key2' => 'Hello' }
table.set("key3", true); // Map(3) { 'key1' => 100, 'key2' => 'Hello', 'key3' => true }

// 해시 테이블 원소 삭제
table.delete("key1");
console.log(table.get("key1")); // undefined

// 해시 테이블 출력
console.log(table); // Map(2) { 'key2' => 'Hello', 'key3' => true }
console.log(table.keys()); // [Map Iterator] { 'key2', 'key3' }
console.log(table.values()); // [Map Iterator] { 'Hello', true }

// 해시 테이블 전체 삭제
table.clear();
console.log(table); // Map(0) {}
