class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      [this.heap[parentIndex], this.heap[currIndex]] = [
        this.heap[currIndex],
        this.heap[parentIndex],
      ];

      currIndex = parentIndex;
      parentIndex = Math.floor(currIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];

    if (this.heap.length === 2) {
      this.heap.pop();
    } else {
      this.heap[1] = this.heap.pop();

      let currIndex = 1;
      let leftIndex = 2;
      let rightIndex = 3;

      while (
        this.heap[currIndex] < this.heap[leftIndex] ||
        this.heap[currIndex] < this.heap[rightIndex]
      ) {
        if (this.heap[leftIndex] < this.heap[rightIndex]) {
          [this.heap[currIndex], this.heap[rightIndex]] = [
            this.heap[rightIndex],
            this.heap[currIndex],
          ];
          currIndex = rightIndex;
        } else {
          [this.heap[currIndex], this.heap[leftIndex]] = [
            this.heap[leftIndex],
            this.heap[currIndex],
          ];
          currIndex = leftIndex;
        }
        leftIndex = currIndex * 2;
        rightIndex = currIndex * 2 + 1;
      }
    }

    return returnValue;
  }
}

// 최대 힙 생성
const maxHeap = new MaxHeap();

// 최대 힙 요소 추가
maxHeap.push(45); // MaxHeap { heap: [ null, 45 ] }
maxHeap.push(36); // MaxHeap { heap: [ null, 45, 36 ] }
maxHeap.push(54); // MaxHeap { heap: [ null, 54, 36, 45 ] }
maxHeap.push(27); // MaxHeap { heap: [ null, 54, 36, 45, 27 ] }
maxHeap.push(63); // MaxHeap { heap: [ null, 63, 54, 45, 27, 36 ] }

// 최대 힙 요소 삭제
const array = [];

array.push(maxHeap.pop()); // MaxHeap { heap: [ null, 54, 36, 45, 27 ] }
array.push(maxHeap.pop()); // MaxHeap { heap: [ null, 45, 36, 27 ] }
array.push(maxHeap.pop()); // MaxHeap { heap: [ null, 36, 27 ] }
array.push(maxHeap.pop()); // MaxHeap { heap: [ null, 27 ] }
array.push(maxHeap.pop()); // MaxHeap { heap: [ null ] }

console.log(array); // // [ 63, 54, 45, 36, 27 ]
