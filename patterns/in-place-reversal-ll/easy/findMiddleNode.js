class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* optimal solution: fast and slow pointers pattern */
const findMiddleNode = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

/* brute-force method: O(n) time complexity, O(1) space complexity */
const findMiddleNode = (head) => {
  let count = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    count++;
  }

  for (let i = 0; i < Math.floor(count/2); i++) {
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

findMiddleNode(a);
