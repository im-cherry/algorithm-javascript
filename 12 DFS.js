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

// DFS
let visitedNode = [];
const stack = [];

stack.push(V);
visitedNode.push(V);

while (stack.length > 0) {
  const src = stack.pop();

  for (const dest of graph[src]) {
    if (!visitedNode.includes(dest)) {
      stack.push(src, dest);
      visitedNode.push(dest);
      break;
    }
  }
}

console.log(visitedNode);
