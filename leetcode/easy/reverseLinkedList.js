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
  return prev;
}

/*
let desc = 'short linked list';
let nodes = valuesToLinkedListNodes([1, 2]);
let reversedList = reverseLinkedList(nodes[0]);
assertEquals(isListReversed(reversedList, nodes), true, desc);


function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

function isListReversed(list, originalNodes) {
  let i = originalNodes.length - 1;
  while (list != null && i >= 0) {
    if (originalNodes[i] != list) {
      return false;
    }
    list = list.next;
    i--;
  }
  return list == null;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
*/