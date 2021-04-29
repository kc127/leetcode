/***
 * CTCI Chapter 1 Arrays and Strings
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures
 *
 */

/* a. brute force O(n^2) */
  const isUnique = (str) => {
    if (str === '') {
      return false;
    }
    if (str.length === 1) {
      return true;
    }

    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }

const isUnique2 = (str) => {
  if (str === '') {
    return false;
  }
  if (str.length === 1) {
    return true;
  }
  let 
}





/* b. optimal solution */

const isUnique3 = (str) => {
  if (str === '') {
    return false;
  }
  if (str.length === 1) {
    return true;
  }
  let sortStr = str.split('').sort();
  for (let i = 0; i < sortStr.length; i++) {
    if(sortStr[i] === sortStr[i+1]) {
      return false;
    }

  }
  return true;
}

console.log(isUnique3('hutg9mnd!nk9'));



/** Hints
 *
 */