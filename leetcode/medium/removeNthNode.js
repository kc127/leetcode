/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 *
 * Time Complexity: O(n) because we traverse the entire list once
 * Space Complexity: O(1) because we only use constant extra space
 */

var removeNthNodeFromEnd = (head, n) => {
  let dummy = new ListNode(0,head);
  let slow = dummy;
  let fast = dummy;

  for (i = 0; i < n+1; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow = slow.next.next;
  return dummy.next;
}