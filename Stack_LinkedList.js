class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size += 1;
  }

  pop() {
    const returnValue = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return returnValue;
  }
}

// 스택 생성
const stack = new Stack();

// 스택 원소 추가
stack.push(2);
stack.push(5);
stack.push(7);

console.log(stack); // Stack { top: Node { value: 7, next: Node { value: 5, next: [Node] } }, size: 3 }

// 스택 원소 삭제
stack.pop();

console.log(stack); // Stack { top: Node { value: 5, next: Node { value: 2, next: null } }, size: 2 }

// 스택 Top 요소
console.log(stack.top); // Node { value: 5, next: Node { value: 2, next: null }
