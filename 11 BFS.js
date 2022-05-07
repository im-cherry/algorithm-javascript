class Queue {
  constructor() {
    this.queue = [];
    this.front = this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];
    return returnValue;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

const N = 5; // 정점의 개수
const M = 5; // 간선의 개수
const V = 3; // 탐색을 시작할 정점의 번호

// 인접 그래프
const graph = Array.from(Array(N + 1), () => []);

// 양방향 그래프 생성
graph[5].push(4);
graph[4].push(5);
graph[5].push(2);
graph[2].push(5);
graph[1].push(2);
graph[2].push(1);
graph[3].push(4);
graph[4].push(3);
graph[3].push(1);
graph[1].push(3);

// 오름차순 정렬
graph.map((value, _) => {
  value.sort((a, b) => a - b);
});

// BFS
let visitedNode = [];
const queue = new Queue();

queue.enqueue(V);
visitedNode.push(V);

while (!queue.isEmpty()) {
  const src = queue.dequeue();
  for (const dest of graph[src]) {
    if (!visitedNode.includes(dest)) {
      queue.enqueue(dest);
      visitedNode.push(dest);
    }
  }
}

console.log(visitedNode);
