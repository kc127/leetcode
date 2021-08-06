/*
Given the head of a singly linked list, return true if it is a palindrome.

Input: head = [1,2,2,1]
Output: true
Constraints: O(N) time and O(1) space
*/

/* approach 1: brute force
   traverse through the linked list and store values in an array
   check if the array is a palindrome

   N -> length of linked list
   time: O(N + N) = O(2N) = O(N)
   space: O(N) because of an array
*/

var isPalindromeBruteForce = (head) => {
  if (head === null) {
    return false;
  }
  // traverse the linked list and store values in arr
  let curr = head;
  let arr = [];
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }

  // check if the array is palindromic
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}