/*
Given an array of words and a max length per line, return an array of strings where each string represents a fully justified line. A fully justified line means that the first letter and last letter in the line should be a letter and not a space, and extra spaces are distributed as evenly as possible.

Examples
["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16
returns

["the  quick brown", // (2 spaces, 1 space)
"fox  jumps  over", // (2 spaces, 2 spaces)
"the   lazy   dog"]  // (3 spaces, 3 spaces)l
*/

function justify(input, k) {
  let results = [];
  let i = 0;

  while (i < input.length) {
    let letterCount = input[i].length;
    let wordCount = 1;

    // 1. identify valid row length from i to j - 1
    for (var j = i + 1; j < input.length && input[j].length + 1 <= k - letterCount - (wordCount - 1); j++) {
        wordCount++;
        letterCount += input[j].length;
    }

    // 2. compute spaces
    let avgSpacesPerWord = Math.floor((k-letterCount)/(wordCount-1));
    let extraSpaces = (k-letterCount)%(wordCount-1);

    // 3. contruct row : word + avg space + extra space
    let row = input[i];
    for (let l = 1; l < wordCount; l++) {
      row += ' '.repeat(avgSpacesPerWord + (extraSpaces > 0 ? 1 : 0)) + input[i+l];
      extraSpaces--
    }

    // 4. add row to results
    results.push(row);
    i += wordCount;
   }
   return results;
}

let input = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
let k = 16
console.log(justify(input, k));

["the  quick brown", // (2 spaces, 1 space)
"fox  jumps  over", // (2 spaces, 2 spaces)
"the   lazy   dog"]  // (3 spaces, 3 spaces)