/*
You are tasked with building a screen which shows the top games being played on a classic board game app. To prevent the games from jumping around on the screen, you must write a function with the following constraints:

Given two arrays oldIDs and newIDs, return an array that meets the following criteria:
    - result contains all values from newIDs
    - all ids that exist in oldIDs are in the same index as they were in oldIDs

assumptions:
- oldIDs size === newIDs size
- no ordering constraint
- no duplicates within same ID array
- positive integers


Examples

oldIDs: [1, 2, 3]
newIDs: [2, 3, 4]
result: [4, 2, 3]

oldIDs: [1, 2, 3, 4]
newIDs: [4, 3, 2, 1]
result: [1, 2, 3, 4]

oldIDs: [1, 2, 3]
newIDs: [3, 4, 5]
result: [4, 5, 3] or [5, 4, 3]

oldIDs: [1,2,3]
newIDs: [4,5,6]
result: [4,5,6]

 hashmap  0, 1, 2
oldIds = [1, 2, 3]

newIds = [2, 3, 4]

          0, 1, 2
result = [3, 2, 4]
          ^
          i = 0,
          while {
            let j = hashmap[result[i]]
            if(i !== j ) swap
            if (i = hashmap value or !hashmap value) i++
          }

old[1,2,3,4]        old[1,2,3,4]
new[4,3,2,1]        new[5,6,7,1]

old[1,3,2,4]
new[4,3,2,1]

old[1,2,3,4]
new[2,1,4,3]


assume everything behind i is either in its correct place, or is new and can be anywhere
so if we swap current element with something from behind, that means current element belongs in that back index, and that previous element can be anywhere, because if not we would have swapped ot its correct position.
if we swap current element with something front, then we dont iterate, the element we swapped forward will be in correct position, and the swapped to here will be evaluate next iteration. Possibly invoking above case.
So again,

[   2, 3, 5, 7, 8, 10, 2, 3      ]
             i     x



oldIDs: [1, 2, 3]
newIDs: [2, 3, 4]
result: [4, 2, 3]

indices = {
    1: 0,
    2: 1,
    3: 2
}
result = [2, 3, 4] =>
         [3, 2, 4]
         [4, 2, 3]
          i
  while i < size
    j = indices[result[i]]
    if (i !== j) => don't increment, swap
    if (i === j) => increment i++

curr: [null, 2, 3]
curr again if pos = null, shift off newId
curr: [4, 2, 3]

Solution #1
hashmap store oldID - oldID : index

let result = new Array(oldId.length)

iterate through newID - check to see if newId is in oldID and if it is
go to the result[index] = value
if it doesnt exist - store in set

iterate through result looking for index that are undefined and filling in those with what in your set, remove value from set once used

Solution #2
psuedocode:
for each element in oldIds:
          assign Ids -> index in hashmap
i = 0
while i < newIds.length:
          if id at i not in hashamp or at same place in hashmap:
            i++
          else:
            swap newIds[i] with newIds[oldIndex[i]]

*/

/*
Solution #1
hashmap store oldID - oldID : index

let result = new Array(oldId.length)

iterate through newID - check to see if newId is in oldID and if it is
go to the result[index] = value
if it doesnt exist - store in set

iterate through result looking for index that are undefined and filling in those with what in your set, remove value from set once used
*/
function solution(oldID, newID) {
  let hashmap = {}
  for (let i = 0; i< oldID.length; i++) {
    hashmap[oldID[i]] = i
  }

  let result = new Array(oldID.length)
  let stack = []

  for (let id of newID) {
    if(hashmap[id]) {
      result[hashmap[id]] = id
    } else {
      stack.push(id)
    }
  }

  for (let i= 0; i< result.length; i++) {
    if(result[i] === undefined) {
      result[i] = stack.pop()
    }
  }

  return result;
}



console.log(solution([1, 2, 3], [4, 2, 3]), ' expect [4, 2, 3]');
console.log(solution([1], [4]), ' expect [4]');
console.log(solution([1, 2, 3], [6, 5, 7]), ' expect [6, 5, 7]');
console.log(solution([1, 2, 3], [1, 2, 3]), ' expect [1, 2, 3]');
console.log(solution([1, 2, 3], [3, 2, 1]), ' expect [1, 2, 3]');
console.log(solution([], []), ' expect []');


/*
Given two arrays oldIDs and newIDs, return an array that meets the following criteria:
    - result contains all values from newIDs
    - all ids that exist in oldIDs are in the same index as they were in oldIDs


    1) result contains all values from newIDs
      your using newIDs in place

    2) all ids that exist in oldIDs are in the same index as they were in oldIDs

    for i,x in A
      while i != j
        swap
      >-

      all ids
        - if the while loop places things correctly, the for loop implies all ids will be placed correctly
      in the same index
        - loop invariant, after 1 iteration of a while loop, you place 1 elemnt in its correct spot, and get a new element, which may or may not need to be moved, but the next while loop handles that

      the while loop doesn't reshift correct position away from their correct spot

      using i as a border where everything on th eleft is placed properly
*/

function solution2(oldID, newID) {
  const hash = {};
  for (let i = 0; i < oldID.length; i++) {
    hash[oldID[i]] = i;
  }

  let i = 0
  while (i < newID.length) {
    if (!(newID[i] in hash) || hash[newID[i]] === i) {
      i++;
    } else {
      [newID[i], newID[hash[newID[i]]]] = [newID[hash[newID[i]]], newID[i]]
    }
  }

  return newID;
}

console.log(solution2([1, 2, 3], [4, 2, 3]), ' expect [4, 2, 3]');
console.log(solution2([1], [4]), ' expect [4]');
console.log(solution2([1, 2, 3], [6, 5, 7]), ' expect [6, 5, 7]');
console.log(solution2([1, 2, 3], [1, 2, 3]), ' expect [1, 2, 3]');
console.log(solution2([1, 2, 3], [3, 2, 1]), ' expect [1, 2, 3]');
console.log(solution2([], []), ' expect []');