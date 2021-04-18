/*
* Given the head of a singly linked list, reverse the list,
* and return the reversed list.
*
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const reverseLinkedList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  let prev = null;
  let curr = head;
  while(curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
}

