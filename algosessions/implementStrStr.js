
/*2. closest match
In the typical strStr problem, we’re only looking for an exact match. In this problem, we are looking for a “closest match” to the target string. A match that is close to the target string can only be missing characters on the end. For example, if the target is “abcd”, you can look for “a”, “ab”, “abc” or “abcd”. “abcd” is the best match, “abc” is the next best, and so on.

In this example, we want to return the location of a best match to the target string.

Ex:

strStr(input: “ababc”, target: “abcd”) // returns 2 because “abc” is the closest match.
strStr(input: “abc”, target: “d”) // return -1 because there is zero match for even the first character.
*/

function strStr(input, target) {
  let best = 0;
  let idx = -1;

  for (let i = 0; i < input.length; i++) {
      let j = 0;
      let matchLen = 0;
      for (j = 0; j < target.length; j++) {
         if (input[i+j] === target[j]) {
            matchLen++;
         } else {
            if (matchLen > best) {
                best = matchLen;
                idx = i;
            }
            matchLen = 0;
         }
      }
  }
return idx;
}

console.log(strStr('ababc', 'abcd'))
console.log(strStr('abc', 'd'))



/* 3: number of locations */
function strStr(input, target) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    let j = 0;
    for (j = 0; j < target.length; j++) {
        if (input[i+j] !== target[j]){
          break;
        }
    }
    if (j === target.length) {
      total++;
    }
  }
  return total === 0 ? -1 : total;
}

console.log(strStr('abcabc','abc'), 'expect 2');
console.log(strStr('aaa','aa'), 'expect 2');
console.log(strStr('abc','d'), 'expect -1');

/* 4 longest consecutive match */

// 1. strStr with Array
// 2. Closest Match
// 3. Number of locations
// 4. Longest consecutive match

/*

4. longest consecutive match
In this variation, we want to find consecutive matches. For example, if the target is “abc”, we want to ideally find “abcabc” or “abcabcabc”. A consecutive match must exactly match the original target. In this variation, we want to return the index of the longest consecutive matches.

Ex:
strStr(input: “abcDabcabcabc”, target: “abc”) // returns 4, that matches “abcabcabc”
strStr(input: “abcdef”, target: “ab”) // returns 0, only a single match
strStr(input: “abcdef”, target: “g”) // returns -1, no matches at all.

HINT
  We recommend building a hashset of locations that match the target. Then, for each location, see if location + length(target) exists in the hashset.

*/


function strStr(input, target) {
  let matches = new Set();

  for (let i = 0; i < input.length; i++) {
    let j = 0;
    for (j = 0; j < target.length; j++) {
        if (input[i+j] !== target[j]) {
          break;
        }
    }
    if (j === target.length) {
      matches.add(i);
    }
  }

  [...matches].forEach(idx => {
      let temp = idx + target.length;
      while (matches.has(temp)) {
           temp += target.length;
      }
  })

}


console.log(strStr('abcDabcabcabc','abc'));
console.log(strStr('aaaaaaaaaaaaaaaa','a'));

/*
      idx           exist in set
      0 + 3             no
      4 + 3 = 7           yes
      7 + 3 = 10        yes
      7 + 3 = 10
*/