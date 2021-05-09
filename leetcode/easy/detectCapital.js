/**
 * This question is asked by Google. Given a string,
 * return whether or not it uses capitalization correctly.
 * A string correctly uses capitalization if all letters are capitalized,
 * no letters are capitalized,
 * or only the first letter is capitalized.
 * Ex: Given the following strings...
 * "USA", return true
 * "Calvin", return true
 * "compUter", return false
 * "coding", return true
 *
 * I: string word
 * O: boolean
 * C: none
 * E: empty string
 *
 *  pseudocode:
 * - validate three rules of capitalization using a counter
 * - traverse through the word
 * - increment a counter when you run into a capital letter
 */

  const detectCapitalUse = (word) => {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        count++;
      }
    }

    return count === word.length || count === 0 || (count === 1 && word[0] === word.toUpperCase());
  }

