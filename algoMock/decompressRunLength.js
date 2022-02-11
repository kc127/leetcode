
```
/*
Decompress a run-length encoded array of bytes
 given compressed version of data, decompress the input and output that version

  (uncompressed) 3, 3, 3, 3, 3, 246, 0, 14, 14, 7, 6

  (compressed) 1, 5, 3, 0, 2, 246, 0, 1, 2, 14, 0, 2, 7, 6


  input: 0, 1, 2
  output: 2

  input: 0, 3, 2, 5, 6
  output: 2,5,6

  input: 0, 1, 2, 1, 4, 5
  output: 2, 5, 5, 5, 5

  input: 0, 1, 0
  output: 0

  input: 1, 2, 1
  output: 1, 1

  input: 0, 2, 2, 4, 1, 2, 3, 0, 1, 6
                     i        i+3
  output: 2,3,3

  approach:
   traverse through the input
    if the element is 0 (i = 0)
        howManyNonRepeating = input[i+1] // 2
        slice our input (start : i + 2, end: start + howManyNonRepeating = i + 2 + 2)
    if the element is 1
        repeating = input[i+1]
        repeatingElement = input[i+2]
        add repeatingElement repeating number of times to my result array
*/
// 0, 1, 2, 1, 2, 3 => 2, 3, 3
// 0, 2, 7, 8, 1, 2, 3 => 7, 8, 3, 3
//       s  i  e
// 0, 2, 7, 8, 1, 2, 3, 0, 2, 7, 8, 1, 2, 3
//                      ^
//                      i  n     i
function decompress(input) {
  let result = [];
  let nonRepeating = 0;
  let repeating = 0;
  for (let i = 0; i < input.length; i++) {
     let curr = input[i];

     if (curr === 0) {
         nonRepeating = input[i+1];
         let startIdx = i+2;  // 2
         let endIdx = startIdx + nonRepeating; // 3
         let itemsToAdd = input.slice(startIdx, endIdx);  // input.slice(2, 3) => 2
         result = result.concat(itemsToAdd);
         i = endIdx - 1
     } else if (curr === 1) {
         repeating = input[i+1];
         let repeatingElement = input[i+2];
         let itemsToAdd = Array(repeating).fill(repeatingElement);
         result = result.concat(itemsToAdd);
         i += 2;
     }
  }
  return result;
}

```