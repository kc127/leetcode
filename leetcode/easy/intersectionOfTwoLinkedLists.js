/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

I: two linked lists
O: node
C: O(n) time and O(1) space

*/
/* appoach 1:
  traverse headA and store its node in a set
  traverse headB and if any of its node is present in headA's set, return that node
  else return null

  time: N -> length of linked list A
        M -> length of linked list B
        O(N + M) because we traverse both lists
  space: O(N) because we store the nodes of linked list A
*/
var getIntersectionNode1 = (headA, headB) => {
  if (headA === null || headB === null) {
    return null;
  }

  let headASet = new Set();

  while (headA !== null) {
    headASet.add(headA);
    headA = headA.next;
  }

  while (headB !== null) {
    if (headASet.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
}

