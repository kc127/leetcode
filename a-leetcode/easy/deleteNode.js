/**
 * Delete a node from a singly-linked list, given only a variable
 * pointing to that node.
 *
 */

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const deleteNode = (nodeToDelete) => {
  let nextNode = nodeToDelete.next;

  if(nextNode) {
    nodeToDelete.value = nextNode.value;
    nodeToDelete.next = nextNode.next;
  } else {
    throw new Error('can\'t delete last node with this technique');
  }
}

/**
 * traverse through the list
 *  check if the next node is target node
 *  if yes, point to the next node of target node
 */

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);
console.log(a);