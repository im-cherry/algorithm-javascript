// 정규 표현식 리터럴 = /패턴/플래그
// 플래그 - (i: 대소문자를 구별하지 않고 검색, g: 문자열 내의 모든 패턴 검색)

// 1. 특정 단어로 시작하는지 검사
const url = "http://example.com";
console.log(/^http/.test(url)); // true

// 2. 특정 단어로 끝나는지 검사
const fileName = "index.html";
console.log(/html$/.test(fileName)); // true

// 3. 아이디로 사용가능한지 검사 (영문자, 숫자만 허용, 4~10자리)
const id = "abc123";
console.log(/^[A-Za-z0-9]{4,10}$/.test(id)); // true

// 4. 메일 주소 형식에 맞는지 검사
const email = "abc123@gmail.com";
console.log(
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
    email
  )
);

// 5. 핸드폰 번호 형식에 맞는지 검사
const phone = "010-1234-5678";
console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(phone)); // true

// 6. 특수 문자 포함 여부 검사
const targetStr = "abc$12!@3";
console.log(/[^A-Za-z0-9]/.test(targetStr)); // true
console.log(targetStr.replace(/[^A-Za-z0-9]/g, "")); // abc123
