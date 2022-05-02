class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(newValue) {
    this.queue[this.rear++] = newValue;
  }

  dequeue() {
    const returnValue = this.peek();
    delete this.queue[this.front];
    this.front += 1;
    return returnValue;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

// 큐 생성
const queue = new Queue();

// 큐 원소 추가
queue.enqueue(1);
queue.enqueue(7);
queue.enqueue(4);

console.log(queue); // Queue { queue: [1, 7, 4], front: 0, rear : 3 }

// 큐 원소 삭제
queue.dequeue();

console.log(queue); // Queue { queue: [ , 7, 4], front: 1, rear: 3 }

// 큐 peek 요소와 크기
console.log(queue.size()); // 2
console.log(queue.peek()); // 7
