/*

given a head of the linked list, and k, reverse nodes of length k.

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseKGroup (head, k) {
  if (!head) {
    return null;
  }
  let curr = head;
  let next = null;
  let prev = null;
  let count = 0;
  while (count < k && curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }

  if (next && hasKthNode(next, k)) {
    head.next = reverseKGroup(next, k);
  } else if (!hasKthNode(next, k)) {
    head.next = next;
  }
  return prev;
}

function hasKthNode(node, k) {
  while (k > 1 && node) {
    node = node.next;
    k--;
  }
  return node;
}