/*

Given input, split string by char
input: string, char

assumptions:
  - char is always valid, length 1 always
  - string can be empty
  - input string doesn't have to include char

"foo bar baz", char = ' ' -> ["foo", "bar", "baz"]
"treeBeartree", char = 'B' -> ['tree', 'eartree']

 two pointers approach
*/



function splitString(string, char) {

  let result = []
  let i = 0;
  let j = 0;

  while(i <= string.length && j <= string.length) {
    while(j <= string.length && string[j] !== char) {
      j++;
    }
    result.push(string.slice(i, j));
    j++;
    i = j;
  }
  return result;
}


console.log(splitString('Xaa', 'X'), ['','aa']);
console.log(splitString('aaX', 'X'), ['aa','']);
console.log(splitString('', 'X'), ['']);
