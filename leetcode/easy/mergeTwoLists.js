/**
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Input: l1 = [1,2,4], l2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * time: O(n) because we visit all nodes at least once
 * space: O(1) because we don't additional data structures
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = (l1, l1) => {
  let dummyHead = new ListNode(0);
  let newHead = dummyHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      dummyHead.next = l1;
      l1 = l1.next;
    } else {
      dummyHead.next = l2;
      l2 = l2.next;
    }
    dummyHead = dummyHead.next;
  }

  if (l1 !== null) {
    dummyHead.next = l1;
  } else {
    dummyHead.next = l2;
  }

  return head.next;
}


