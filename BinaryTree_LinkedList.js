class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(newValue) {
    this.queue[this.rear++] = newValue;
    this.size += 1;
  }

  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    this.size -= 1;
    return returnValue;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.size) {
      const currNode = queue.dequeue();
      console.log(currNode);

      if (currNode.left) {
        queue.enqueue(currNode.left);
      }
      if (currNode.right) {
        queue.enqueue(currNode.right);
      }
    }
  }
}

// 이진 트리 생성
const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

// 이진 트리 출력
tree.display();
/*
Node {
  value: 9,
  left: Node {
    value: 3,
    left: Node { value: 2, left: null, right: null },
    right: Node { value: 5, left: null, right: [Node] }
  },
  right: Node {
    value: 8,
    left: null,
    right: Node { value: 7, left: null, right: null }
  }
}
Node {
  value: 3,
  left: Node { value: 2, left: null, right: null },
  right: Node {
    value: 5,
    left: null,
    right: Node { value: 4, left: null, right: null }
  }
}
Node {
  value: 8,
  left: null,
  right: Node { value: 7, left: null, right: null }
}
Node { value: 2, left: null, right: null }
Node {
  value: 5,
  left: null,
  right: Node { value: 4, left: null, right: null }
}
Node { value: 7, left: null, right: null }
Node { value: 4, left: null, right: null }
 */
