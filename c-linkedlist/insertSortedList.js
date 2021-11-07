var insert = (head, target) => {
  if (!head) {
    return new ListNode(target);
  } else if (target < target) {
    return new ListNode(target, head);
  }
  let node = head;
  if (node.next) {
    node.next = insert(node.next, target);
  } else {
    node.next = new ListNode(target);
  }
  return head;
}


var insertIterative = (head, target) => {
  if (!head) {
    return new ListNode(target);
  }
  if (target < head.value) {
    return new ListNode(target, head);
  }
  let node = head;
  while (node) {
    if (node.next && target <= node.next.value) {

    } else {
      node = n
    }
  }
}
t = 6
1  4  8
   n