/*
I: string
O: string
C: optimal solution
E: palindrome of even and odd length

pseudocode:
  iterate over input string
    at every character
      find oddLength palindrome with char as pivot until left !== right
      find evenLength palindrome with char as pivot-until left !== right
      update longest as necessary
  return longest palindrome

*/

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