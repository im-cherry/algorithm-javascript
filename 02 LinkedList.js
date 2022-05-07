class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.value === value) {
        return currNode;
      }
      currNode = currNode.next;
    }

    return null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, value) {
    const newNode = new Node(value);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next !== null) {
      if (prevNode.next.value === value) {
        prevNode.next = prevNode.next.next;
      }
      prevNode = prevNode.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "";
    while (currNode != null) {
      displayString += `${currNode.value} → `;
      currNode = currNode.next;
    }

    displayString = displayString.substring(0, displayString.length - 3);

    console.log(displayString);
  }
}

// 연결 리스트 생성
const linkedList = new LinkedList();

// 연결 리스트 요소 추가
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.insert(linkedList.find(2), 10);

linkedList.display(); // 1 → 2 → 10 → 3 → 4 → 5

// 연결 리스트 요소 삭제
linkedList.remove(10);
linkedList.remove(0);

linkedList.display(); // 1 → 2 → 3 → 4 → 5

// 연결 리스트 요소 탐색
console.log(linkedList.find(1)); // Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: [Node] } } }
console.log(linkedList.find(5)); // Node { value: 5, next: null }
console.log(linkedList.find(10)); // null
