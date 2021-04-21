class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.node = null;
  }
}

const detectCycle = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
}