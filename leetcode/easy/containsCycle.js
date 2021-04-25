/**
 * You have a singly-linked list ↴ and want to check if it contains a cycle.
 */

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const detectCycle = (head) => {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast) {
      return true;
    }
  }

  return false;
}



