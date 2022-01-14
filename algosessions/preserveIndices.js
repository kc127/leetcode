/*
You are tasked with building a screen which shows the top games being played on a classic board game app. To prevent the games from jumping around on the screen, you must write a function with the following constraints:

Given two arrays oldIDs and newIDs, return an array that meets the following criteria:
- result contains all values from newIDs
- all ids that exist in oldIDs are in the same index as they were in oldIDs

Examples

  oldIDs: [1, 2, 3]
  newIDs: [2, 3, 4]
  result: [4, 2, 3]


   indices = {1:0, 2:1,3:2}
   result = [2,3,4]
   newIDs: [4, 2, 3]


  oldIDs: [1, 2, 3, 4]
  newIDs: [4, 3, 2, 1]
  result: [1, 2, 3, 4]

  oldIDs: [1, 2, 3]
  newIDs: [3, 4, 5]
  result: [4, 5, 3] or [5, 4, 3]

  oldIDs: [1,2,3]
  newIDs: [4,5,6]
  result: [4,5,6] or [5,6,4] ...

  oldIDs: [3,7,1]
  indices: {3:0, 7:1, 1:2}
  newIDs: [1,8, 4]

  result: [4,8,1] [8,4,1]

  result [8,none,1]
             ^

Function Signature
javascript
function preserveIndices(oldIDs: [string], newIDs: [string]) => result: [string]
*/

function preserveIndices(oldIDs, newIDs) {
  const size = oldIDs.length;
  let result = Array.from(newIDs);
  // or:
  // let results = [...newIDs];

  let indices = {};
  for (let i = 0; i < size; i++){
    indices[oldIDs[i]] = i;
  }

  for (let i = 0; i < size; i++) {
     if (indices[result[i]] !== undefined) {
        if (i !== indices[result[i]]) {
           let j = indices[result[i]];
           [result[i],result[j]] = [result[j], result[i]];
           i--;
        }
     }
  }
  return result;
}


console.log(preserveIndices([3,7,1],[1,2,3]),[3,2,1])
console.log(preserveIndices([1,2,3],[2,3,4]),[4,2,3])
console.log(preserveIndices([5,4,3,2],[2,3,4,5]),[5,4,3,2])
console.log(preserveIndices([1,2,3],[4,5,6]), [4,5,6])