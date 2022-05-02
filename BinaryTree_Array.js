// 이진 트리 생성
// 0, 1,
const tree = [null, 1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

// 이진 트리 출력
// 부모, 왼쪽 자식, 오른쪽 자식
for (let index = 1; index < tree.length - 1; index++) {
  console.log(
    `${index} : ${tree[Math.floor(index / 2)]}, ${tree[index * 2]}, ${
      tree[index * 2 + 1]
    }`
  );
}
/*
1 : null, 1, 5
2 : 1, 124, 400
3 : 1, 599, 1004
4 : 1, 2876, 8712
5 : 1, undefined, undefined
6 : 5, undefined, undefined
7 : 5, undefined, undefined
8 : 124, undefined, undefined
*/
