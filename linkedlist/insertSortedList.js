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