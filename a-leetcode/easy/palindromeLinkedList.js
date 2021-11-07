/*
Given the head of a singly linked list, return true if it is a palindrome.

Input: head = [1,2,2,1]
Output: true
Constraints: O(N) time and O(1) space
*/

/*
approach 2: Two Pointers with reverse linked list
    get the end of the first half of the linked list by fast/slow pointer technique
    get the second of the linked list (which is end of the first half . next)
    reverse the second half
    create two pointers p1 points to head
                        p2 points to start of the second half
    compare the values in nodes of first half with second half
    reverse the second half
    return result
*/
var isPalindromeOptimal = (head) => {
  if (head === null) {
    return true;
  }

  let firstHalfEnd = getFirstHalfEnd(head);
  let secondHalfStart = reverseSecondHalf(firstHalfEnd.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let isPalindrome = true;
  while (isPalindrome && p2 !== null) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  firstHalfEnd.next = reverseSecondHalf(secondHalfStart);
  return isPalindrome;
}

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