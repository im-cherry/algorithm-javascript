// 그래프 생성
const graph = Array.from(Array(5), () => Array(5).fill(false));

// 그래프 초기화
graph[0][1] = true;
graph[0][3] = true;
graph[1][2] = true;
graph[2][0] = true;
graph[2][4] = true;
graph[3][2] = true;
graph[4][0] = true;

// 그래프 출력
console.log(graph);
/*
[
  [ false, true, false, true, false ],
  [ false, false, true, false, false ],
  [ true, false, false, false, true ],
  [ false, false, true, false, false ],
  [ true, false, false, false, false ]
]
 */
