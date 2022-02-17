/* Optimal : Hashmap (Object) O(n) time */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }

  let charCount = {};
  for (let char of s) {
      if (!charCount[char]){
        charCount[char] = 1
      } else {
        charCount[char]++;
      }
  }

  for (let c of t) {
      if (!charCount[c] || charCount[c] <= 0) {
          return false
      } else {
         charCount[c]--;
      }
  }
  return true;
};


/* Brute force: Sorting O(nlogn) */
var isAnagramBruteForce = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  var sSorted = s.split("").sort();
  var tSorted = t.split("").sort();

  return JSON.stringify(sSorted) === JSON.stringify(tSorted);
}

console.log(isAnagramBruteForce('rat','catt'));