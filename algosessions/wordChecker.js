/*
Given a dictionary (represented by an array of string) and a word, return an array containing all words that can be created by adding one letter to the word.

Examples
dictionary: ["CAT", "CART", "ACTS", "BAT"]
word: "CAT"
would return ["ACTS", "CART"]

because these words can be formed with the letters "C", "A", "T", and exactly one more letter.

C A T
A T C
A C T
C T A
T A C
T C A

{C:1, A:1, T:1}
hashmap word input

hashmap for each item in array

  example: arr[1] = {C:1, A:1, T:1, R:1} 4

O(k * n) k = word in array, n = char in word

  if word.length !== arr[i] continue

function isWordPlusOne(hash, word
  count = 0
  for(char in word) {
    if hash[char]
  }

  Approach 1: Sorting
  act acrt acst abt // sorted words
  res = [] // push into
  SORT WORD = ACT                               act
  sort each individual word in dictiionary [act acrt acst abt]

  pseudo:
    res = []
    sort word input
    sort each item in dict
    loop through sorted dict
      if(sortedDict[i].length - 1 === sortedWord.length)
        do something
        if it is a matching valid word, push UNSORTED word to res


    return res

    n = number of words in the dict
    k = avg length of the word
*/
function wordMatcher(dict, word) {
  var res = []
  var sortedWord = word.split('').sort().join('') // klogk
  var sortedDict = dict.map(w => w.split('').sort().join('')) // O(n(klogk))

  for (let i = 0; i < sortedDict.length; i++) { // o(n)
     if (sortedDict[i].length - 1 === sortedWord.length) {
         if (check(sortedDict[i], sortedWord)) { // o(klogk)
            res.push(dict[i]);
         }
     }
  }

  return res;
}

var all = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function check(str1, str2) {
  for(let char of all) {
    let sorted = (str2 + char).split('').sort().join('') // o(klogk)
    if (sorted === str1){
      return true;
    }
  }
  return false;
}


// overall o(n*klogk)

console.log(wordMatcher(["CAT", "CART", "ACTS", "BAT"], 'CAT'))