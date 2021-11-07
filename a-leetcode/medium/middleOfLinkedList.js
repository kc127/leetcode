var findMid = (head) => {
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow.value;
}