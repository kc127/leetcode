class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* optimal solution: fast and slow pointer
 * O(n) time complexity
 * O(1) space complexity for slow and fast variables
 */
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

