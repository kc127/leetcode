/*
1. (F)irst solution - use recursion
2. (A)nalyze - look for patterns
3. Identify recurring (S)ubproblems
4. (T)urn the solution around
*/


// A subsequence is a series of elements that occur in order
// but not necessarily adjacent.
// The longest common subsequence is the longest subsequence
// that occurs in both input sequences.
function lcs(w1, w2) {
  function recursive(w1, w2, i, j) {
    if (w1.length === i || w2.length === j) {
      return "";
    }

    if (w1[i] === w2[j]) {
      return w1[i] + recursive(w1, w2, i + 1, j + 1);
    } else {
      /*
      call recursive(...i, j+1)
      call recursive(...i+1, j)
      return the longer of the two recursive calls
      */
      let call1 = recursive(w1, w2, i, j + 1);
      let call2 = recursive(w1, w2, i + 1, j);

      return call1.length >= call2.length ? call1 : call2;
    }
  }

  return recursive(w1, w2, 0, 0);
}

//https://docs.google.com/spreadsheets/d/1uGlMA744nPJK5CfxUsYdO3Jv5ex_xjfPQ4ps5u1UyOA/edit#gid=0
function lcs_dp(w1, w2) {
  const key = (a, b) => a + "," + b;
  const table = {};

  for (let i = 0; i < w1.length; i++) {
    for (let j = 0; j < w2.length; j++) {
      //look at value to the top of us
      const topVal = table[key(i - 1, j)] || "";
      //and at value to left of us
      const leftVal = table[key(i, j - 1)] || "";
      let longest = topVal.length >= leftVal.length ? topVal : leftVal;

      const k = key(i,j);
      if (w1[i] === w2[j]) {
        table[k] = longest + w1[i];
      } else {
        table[k] = longest;
      }
    }
  }

  return table[key(w1.length - 1, w2.length - 1)];
}

console.log("Longest Common Subsequence:");
console.log(lcs("abcd", "abcd"), "abcd");
console.log(lcs("axbxcxdx", "abcd"), "abcd");
console.log(lcs("abcd", "axbxcxdx"), "abcd");
console.log(lcs("zyxwa", "abcd"), "a");
console.log(lcs("zyxw", "abcd"), "[empty string]");
console.log(lcs("axbxc", "xabc"), "abc");
console.log("DP:");
console.log(lcs_dp("abcd", "abcd"), "abcd");
console.log(lcs_dp("axbxcxdx", "abcd"), "abcd");
console.log(lcs_dp("abcd", "axbxcxdx"), "abcd");
console.log(lcs_dp("zyxwa", "abcd"), "a");
console.log(lcs_dp("zyxw", "abcd"), "[empty string]");
console.log(lcs_dp("axbxc", "xabc"), "abc");

// shortest common supersequence - what is the shortest string such that both input strings are subsequences
//dad, abc => dabcd, dadbc
