/*

sorting and hashmap approach,
time: O(nklogk) with n being the length of the strs array, k being the length of the str
space: O(nk) to store table object

I: array of strings
O: array of arrays containing strings
*/

var groupAnagrams = (strs) => {
  let table = {};

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    if (table[sortedStr] === undefined) {
      table[sortedStr] = [str];
    } else {
      table[sortedStr].push(str);
    }
  }

  let anagrams = [];

  for (let anagram in table) {
    anagrams.push(table[anagram]);
  }
  return anagrams;
}

let strs = ["eat","tea","tan","ate","nat","bat"] // soln: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(strs));