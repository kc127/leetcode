// recursive approach

var append = (head, target) => {
    if (head === null) {
      return new ListNode(target);
    } else {
      head.next = append(head.next, target);
    }
    return head;
}

