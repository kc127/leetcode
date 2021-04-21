class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const findMiddleNode = (head) => {
  let count = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    count++;
  }

  for (let i = 0; i < count/2; i++) {
    head = head.next;
  }
  return head;
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

console.log(findMiddleNode(a));
