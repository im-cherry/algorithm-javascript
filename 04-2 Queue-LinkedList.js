class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    const returnValue = this.peek();
    this.head = this.head.next;
    this.size--;
    return returnValue;
  }

  peek() {
    return this.head.value;
  }
}

// 큐 생성
const queue = new Queue();

// 큐 원소 추가
queue.enqueue(1);
queue.enqueue(7);
queue.enqueue(4);

// 큐 원소 삭제
queue.dequeue();

// 큐 Peek 요소와 크기
console.log(queue.peek()); // 7
console.log(queue.size); // 2
