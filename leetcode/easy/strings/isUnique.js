/***
 * CTCI Chapter 1 Arrays and Strings
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures
 *
 */

/* a. brute force O(n^2) */
  const isUnique = (str) => {
    // assuming, string is ascii
    if (str === '' || str.length > 128) {
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
  if (str === '' || str.length > 128) {
    return false;
  }
  if (str.length === 1) {
    return true;
  }
  let char = {};
  for (let i = 0; i < str.length; i++) {
    let charValue = str[i].charCodeAt(0);
    if(char[charValue]) {
      return false;
    }
    char[charValue] = true;
  }
  return true;
}





/* b. optimal solution */

const isUnique3 = (str) => {
  if (str === '' || str.length > 128) {
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

console.log(isUnique2('ka!n9'));



/** Hints
 *
 */