// 스택 생성
const stack = [];

// 스택 원소 추가
stack.push(1); // [1]
stack.push(3); // [1, 3]
stack.push(5); // [1, 3, 5]

// 스택 원소 삭제
stack.pop(); // [1, 3]

// 스택 Top 요소
console.log(stack[stack.length - 1]); // 3
