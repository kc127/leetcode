/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
  if (!head) {
      return null;
  }
  let curr = head;

  let prev = null;
  let next = null;
  let count = 0
  while (count < k && curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      count++;
  }

  if (next && canBeReversed(next, k)) {
     head.next = reverseKGroup(next, k)
  } else if (!canBeReversed(next, k)) {
      head.next = next;
  }
  return prev;
};

var canBeReversed = (curr, k) => {
  while (k > 1 && curr) {
      curr = curr.next;
      k--;
  }
  return curr;
}