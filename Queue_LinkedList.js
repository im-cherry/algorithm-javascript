class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const returnValue = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
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

/*
Queue {
    head: Node { value: 1, next: Node { value: 7, next: [Node] } },
    tail: Node { value: 4, next: null },
    size: 3
}
*/
console.log(queue);

// 큐 원소 삭제
queue.dequeue();

/*
Queue {
    head: Node { value: 7, next: Node { value: 4, next: null } },
    tail: Node { value: 4, next: null },
    size: 2
}
*/
console.log(queue);

// 큐 peek 요소와 크기
console.log(queue.size); // 2
console.log(queue.peek()); // 7
