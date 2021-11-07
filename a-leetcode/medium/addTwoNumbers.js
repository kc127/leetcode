/**
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

I: two linked lists
O: linked list
C:
E:

bruteforce:
  initialize a dummy node to value 0
  initialize current pointer

  initialize two pointers to input ll1 and ll2
  initialize carry variable to 0
  while p1 or p2 are not null
    get the value of current p1 node
    get the value of current p2 node
    get the sum of p1 and p2 node values and carray

    set carry to sum divided by 10
    set current.next to sum module 10
    set current to current.next

    if p1.next is not null then set p1 to p1.next
    if p2.next is not null then set p2 to p2.next

  if carry is not 0, then create new node with carry value and point current.next to this node

  return current.next
 */

  function ListNode(val, next) {
    this.val = (val === undefined ? 0: val);
    this.next = (next === undefined ? null : next);
  }

  var addTwoNumbers = (l1, l2) => {
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    let p1 = l1;
    let p2 = l2;

    let carry = 0;

    while (p1 !== null || p2 !== null) {
      let x = (p1 ? p1.val : 0);
      let y = (p2 ? p2.val : 0);

      let sum = x + y + carry;
      carry = Math.floor(sum/10);

      current.next = new ListNode(sum%10);
      current = current.next;

      p1 = (p1 ? p1.next : null);
      p2 = (p2 ? p2.next : null);
    }

    if (carry > 0) {
      current.next = new ListNode(carry);
    }

    return current.next;
  }