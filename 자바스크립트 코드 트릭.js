// 구조 분해 할당을 이용한 변수 swap
let a = 4;
let b = 10;
[a, b] = [b, a];

// 배열 생성으로 루프 제거하기
const sum = Array.from(Array(10), (_, index) => index + 1).reduce(
  (acc, cur) => acc + cur,
  0
);

// 배열 내 같은 요소 제거하기
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNames = [...new Set(names)];

// Spread 연산자를 이용한 객체 병합
const person = {
  name: "im cherry",
  familyName: "im",
  givenName: "cherry",
};
const company = {
  name: "SSAFY",
  address: "Daejeon",
};

const personAndCompany = { ...person, ...company };

// 구조 분해 할당 사용하기
const cherry = {
  name: "im cherry",
  familyName: "im",
  givenName: "cherry",
  company: "SSAFY",
  address: "Daejeon",
};

const { name, address } = cherry;

// 비구조화 할당 사용하기
const makeCompany = ({ company, address }) => {
  return {
    company,
    address,
  };
};
const SSAFY = makeCompany(cherry);

// 동적 속성 이름
const nameKey = "name";
const emailKey = "email";

const profile = {
  [nameKey]: "im cherry",
  [emailKey]: "collcr@kakao.com",
};
