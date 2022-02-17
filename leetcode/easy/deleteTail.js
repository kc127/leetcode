class LinkedListNode {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


const deleteTail = (head) => {
  if(head === null || head.next === null) {
    head = null;
  }

  // find the second last node
  let secondLastNode = head;

  while(secondLastNode.next.next !== null) {
    secondLastNode = secondLastNode.next;
  }
  // change the next of second last node to point to null
  secondLastNode.next = null;

}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

deleteTail(a);

// e.g
// 1->2->3->null,
// secondLastNode = 1;
// 1st while loop : secondLastNode.next.next = 3 !== null
// secondLastNode = secondLastNode.next = 2
// 2nd while loop: secondLastNode.next.next = null
// exit while loop => secondLastNode.next = null;