/*
Your previous Python 3 content is preserved below:

'''
Given an array of unique values, print the power set of that array.

The power set is a list of all of the possible combinations of the array's elements.

Examples:

power_set([]);
[]

power_set(['a', 'b']);
[]
[ 'b' ]
[ 'a' ]
[ 'a', 'b' ]


[a,b,c] => [[], [a], [b], [c], [a,b], [a,b,c], [b,c], [a,c]]

for i = 0 till n-1
    for j = i+1 till n - 1

inputArray = [a,b,c]
sets = [[]]
for char in inputArray
    for set in sets
        create an empty array
        store current set's val in new array
        append current char to new array
        push new array into sets

a
[[]]
[[], [a]]
[[], [a], [b], [a,b], [c], [a,c], [b,c], [a,b,c]]


n = length inputArray

2^n = number of sets


O(n*2^n)



recurPowerSet([a,b,c], index, currSet)

recurPowerSet([b,c])

recurPowerSet([c])

recurPowerSet([]) => [[],[a]]





recurPowerSet(inputArray, index, currSet) {// [a,b,c], 0, []

  if (index === inputArray.length - 1) {
    return;
  }
  console.log(currSet) // []

  for (i = index i , inputArray.length; i++) {
    let newSet = [...currSet, inputArray[i]] // [a]
    recurPowerSet(inputArray, index + 1, newSet)
  }
}






base case: when current index === length of values

'''
*/

function powerSet(values){
  let sets = [[]]

  for(const char of values){
    let size = sets.length;
    for(let i = 0; i < size; i++){
      let newSet = [...sets[i], char];
      sets.push(newSet);
    }
  }

  return sets;
}



// tests

let test1 = ['a', 'b', 'c']
let test2 = ['1', 'b', 'a', 'd']
console.log(powerSet(test1),'[[], [a], [b], [c], [a,b], [a,b,c], [b,c], [a,c]]')
console.log(powerSet(test2))






























