// 그래프 생성
const graph = Array.from(Array(5), () => []);

// 그래프 초기화
graph[0].push(3);
graph[1].push(2);
graph[2].push(0);
graph[2].push(4);
graph[3].push(2);
graph[4].push(0);

// 그래프 출력
console.log(graph);
/*
[ 
    [ 3 ],
    [ 2 ],
    [ 0, 4 ],
    [ 2 ],
    [ 0 ]
]
*/
