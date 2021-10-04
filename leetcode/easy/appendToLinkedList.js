/**
Q. Given a linked list, append an element with a target value to the list iteratively.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5, target: 7 // returns 1 ➞ 4 ➞ 5 ➞ 7
• Given a linked list: 0, target 7 // returns 0 ➞ 7

 * @param {*} head
 * @param {*} target
 * @returns
 */

// recursive approach

var append = (head, target) => {
    if (head === null) {
      return new ListNode(target);
    } else {
      head.next = append(head.next, target);
    }
    return head;
}


// iterative approach 
