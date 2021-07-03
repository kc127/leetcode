/* KMP algorithm for pattern matching */
abcde
bc


function strstr(s, x) {
  let lps = computeTemporaryArray(x);

  let i = 0;
  let j = 0;
  while (i < s.length && j < x.length) {
    if (s[i] === x[j]) {
      i++;
      j++;
    } else {
      if (i !== 0) {
        j = lps[j-1];
      } else {
        i++;
      }
    }
  }
  if (j === x.length) {
    return true;
  }
  return false;
}

/* build a temporary array to maintain size of suffix which is same as prefix */
const computeTemporaryArray = (x) => {
  let lps = [];
  lps[0] = 0;
  let j = 0;
  for (let i = 1; i < x.length;) {
      if(x[i] === x[j]) {
          lps[i] = j + 1;
          i++;
          j++;
      } else {
        if (j !== 0) {
          j = lps[j-1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
  }
  return lps;
}
console.log(strstr('abc', 'abcdabca'))