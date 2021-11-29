/*jjj
I: string
O: string
C: optimal solution
E: palindrome of even and odd length

runtime: O(n^2)

pseudocode:
  iterate over input string
    at every character
      find oddLength palindrome with char as pivot until left !== right
      find evenLength palindrome with char as pivot-until left !== right
      update longest as necessary
  return longest palindrome

*/
//Optimal O(n) runtime with O(1) space
var longestPalindrome = function(s) {
  let longest = [0,1];

  for (let i = 0; i < s.length; i++) {
      let oddLen = checkPalindrome(i-1, i+1, s);
      let evenLen = checkPalindrome(i, i+1,s);

      longest = (oddLen[1] - oddLen[0] > evenLen[1]-evenLen[0]) ?
                                   (oddLen[1] - oddLen[0] > longest[1] - longest[0] ? oddLen : longest) :
                                   (evenLen[1]-evenLen[0] > longest[1] - longest[0] ? evenLen: longest);
  }

  return s.slice(longest[0], longest[1]);
};

var checkPalindrome = (i, j, s) => {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--;
      j++;
  }
  return [i+1, j];
}


// Optimal O(n) runtime with O(n) space
var longestPalindrome = (s) => {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let oddPal = findPalindrome(i-1, i+1, s);
    let evenPal = findPalindrome(i, i+1, s);

    longest = (oddPal.length > evenPal.length) ? (oddPal.length > longest.length ? oddPal : longest) : (evenPal.length > longest.length ? evenPal : longest);
  }
  return longest;
}

var findPalindrome = (left, right, s) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}


let s = "babad" // soln: "bab" Note: "aba" is also a valid answer.
console.log(longestPalindrome(s))