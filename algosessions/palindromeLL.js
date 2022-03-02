/*

Given the head of a singly linked list, return true if it is a palindrome

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

Input: head = [5,3,0,3,5]
Output: true

brute force: o(n) time and space
convert the linked list  into an array -> o(n) time, space
check if the array is a palindrome or not ->o(n)

space o(1) solution
  - (one pass) reverse the list, newHead

  let oldHead = head;

                    o
                 h: 1 2 2 5
                          p c
      reverse(h)    5 2 2 1
                    p


*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isPalindrome(head) {

let oldHead = head;
let newHead = reverseLL(head);

while (oldHead && newHead) {
  if (oldHead.val !== newHead.val) {
      return false;
  }
  oldHead = oldHead.next;
  newHead = newHead.next;
}
return true;
}

function reverseLL(head) {
let curr = head;
let prev = null;

while (curr) {
  let next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}
return prev;
}

let ll1 = new ListNode(1,
                      new ListNode(2,
                                   new ListNode(2,
                                                new ListNode(1))));
let ll2 = new ListNode(1,
                      new ListNode(2));
let ll3 = new ListNode(5,
                      new ListNode(3,
                                   new ListNode(0,
                                                new ListNode(3,
                                                            new ListNode(5)))));

console.log(isPalindrome(ll1), ' expect true');
console.log(isPalindrome(ll2), ' expect false');
console.log(isPalindrome(ll3), ' expect true');

//1 2 2 1
//1 2   1 2

//5 3 0 3 5
//5 3 0 5 3
    i     j
//5 3 0 3 5
