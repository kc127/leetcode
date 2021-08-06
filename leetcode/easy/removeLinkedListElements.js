/**
 Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 Input: head = [1,2,6,3,4,5,6], val = 6
 Output: [1,2,3,4,5]

 */

 /* Definition of a singly linked list

 function ListNode(val, next) {
   this.val = (val === undefined ? 0 : val);
   this.next = (next === undefined ? null : next);
 }
 */

 /* time: O(N)
    space: O(1)
  */

 var removeElements = (head, val) => {
   if (head === null) {
     return null;
   }

   let sentinel = new ListNode(0);
   sentinel.next = head;

   let prev = sentinel;
   let curr = head;

   while (curr !== null) {
     if (curr.val === val) {
       prev.next = curr.next;
     } else {
       prev = curr;
     }
     curr = curr.next;
   }
 }