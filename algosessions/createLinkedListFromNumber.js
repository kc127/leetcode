/*
Today, you will be giving the Create Linked List From Number problem.
In this problem, we will be taking in a number and creating a linked list out of it, where each node has a value of a single digit in the number. The output should read in the same order as the input number.

Function Signature: func createLL(number: Int) -> Node
Input: createLL(number: 123)
Ouput: 1 -> 2 -> 3

input type = integer
123 => 1->2->3

0 => new ListNode(0)

1 => new ListNode(1)

12 => new ListNode(1,
                    new ListNode(2))





newHead = new ListNode(0)
curr = newHead

convert input into a str
  traverse though my str
    create newNode with curr char as the value (into Number)
    next pointer of curr to newNode
    curr = curr.next

return newHead.next

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLL(number) {

  let str = String(number);
  let newHead = new ListNode(str[0]);
  let curr = newHead;
  let i = 0;
  for (let i = 1; i < str.length; i++){
     let newNode = new ListNode(Number(str[i]));
     curr.next = newNode;
     curr = curr.next;
  }

  return newHead;
}
console.log(createLL(123));
console.log(createLL(0));
console.log(createLL(1));
console.log(createLL(3215));