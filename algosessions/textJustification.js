/*
Given an array of words and a max length per line, return an array of strings where each string represents a fully justified line. A fully justified line means that the first letter and last letter in the line should be a letter and not a space, and extra spaces are distributed as evenly as possible.

Examples
["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16
returns

["the  quick brown", // (2 spaces, 1 space)
"fox  jumps  over", // (2 spaces, 2 spaces)
"the   lazy   dog"]  // (3 spaces, 3 spaces)l
*/

/*
  iterate over input array
    create

*/
function justify(input, k) {
  let results = [];
  let i = 0;

  while (i < input.length) {

    let wordCount = 1;
    let letterCount = input[i].length;
    for (let j = i + 1; j < input.length && input[j].length + 1 <= k - letterCount - (wordCount - 1); j++) {
      wordCount++;
      letterCount += input[j].length;
    }

    //let spaces = 1;
    //let numExtraSpaces = 0;
    let row = input[i];

    let spaces = Math.floor((k - letterCount) / (wordCount - 1))
    let numExtraSpaces = (k-letterCount)%(wordCount-1)
    console.log(`spaces: ${spaces}`, `numExtraSpaces: ${numExtraSpaces}`)
    for (let j = 1; j < wordCount; j++) {
      row += '_'.repeat(spaces + (numExtraSpaces > 0 ? 1 : 0)) + input[i+j];
      // for (let k = 0; k < spaces; k++) {
      //   row += '_'
      // }
      // if (j <= numExtraSpaces) {
      //   row += '_'
      // }
      // row += input[i + j]
      numExtraSpaces--;
    }
    console.log(k, row.length)
    results.push(row)
    console.log(wordCount)
    i += wordCount
  }
  return results;
}
let input = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
let k = 16
console.log(justify(input, k));