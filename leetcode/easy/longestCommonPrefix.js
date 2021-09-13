var longestCommonPrefix = (strs) => {
  let prefix = "";
  let comparisonWord = strs[0];
  let comparisonIdx = 0;

  for (let comparisonLetter of comparisonWord) {
    for (let i = 1; i < strs.length; i++) {
      let currentWord = strs[i];
      let currentLetter = currentWord[comparisonIdx];

      if (currentLetter !== comparisonLetter || comparisonIdx > currentWord.length) {
        return prefix;
      }
    }
    prefix += comparisonLetter;
    comparisonIdx++;
  }

  return prefix;
}


let strs = ["flower","flow","flight"] // soln:  "fl"