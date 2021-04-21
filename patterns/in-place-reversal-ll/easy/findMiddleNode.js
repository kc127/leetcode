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
  console.log(count);
  for (let i = 0; i < Math.floor(count/2); i++) {
    console.log(head);
    head = head.next;
  }

  return head;
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');
const d = new LinkedListNode('D');

a.next = b;
b.next = c;
c.next = d;

console.log(findMiddleNode(a));
