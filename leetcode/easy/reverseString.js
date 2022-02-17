/***
 * Given a string, reverse all of its characters and return the resulting string.
 *
 * Soln:
 * Two Pointer method
 * O(n) time complexity with O(n) space complexity
 *
 * */

const reverseString = (str) => {
   let charArray = str.split('');
   let left = 0;
   let right = str.length - 1;
   while (left < right) {
     let temp = charArray[left];
     charArray[left] = charArray[right];
     charArray[right] = temp;
     left++;
     right--;
   }

   return charArray.join('');
}


