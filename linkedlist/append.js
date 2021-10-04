class ListNode {
  constructor(value = 0, next = null) {
    this.value = value,
    this.next = next;
  }
}

var appendIterative = (head, target) => {
  if (!head) {
    return new ListNode(target);
  }

  let curr = head;
  while (curr) {
    curr = curr.next;
  }

  curr.next = new ListNode(target);
  return head;
}

var appendRecursive = (head, target) => {
  if (!head) {
    return new ListNode(target);
  }
  let node = head;
  if (node.next) {
    append(node.next, target);
  } else {
    node.next = new ListNode(target);
  }
  return node;
}