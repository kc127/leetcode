// 0. Return length only (no subsequence)
// 1. Return longest subsequence
// 2. String input
// 3. Longest consecutive subsequence


/*
   1  1  2  1  3  3  4
  [] [] [] [] [] [] []


  1, -1, 2, -2, 5,    3,    7
  [] []  [1] [] [1,2,5] [1,2,3] [1,2,5,7]

  lengths[i] = lengths[p] + [input[i]]

*/


const LISlength = (input) => {
  let lengths = input.map(num => 1);
  let max = 0;

  for (let i = 1; i < input.length; i++) {
   for (let p = 0; p < i; p++) {
    if (input[p] < input[i] && lengths[p] + 1 >= lengths[i]) {
      lengths[i] = lengths[p] + 1;
      max = Math.max(max, lengths[i]);
    }
   }
  }
  return max;
}


/*
x = [1,2,3]

y = [4,5,6]

a = x + y

a = x.append(...x)

a => [1,2,3,4,5,6]

*/


const LIS = (input) => {
  let subseq = input.map(num => [num]);
  let maxIdx = 0;

  for (let i = 1; i < input.length; i++) {
   for (let p = 0; p < i; p++) {
    if (input[p] < input[i] && subseq[p].length + 1 >= subseq[i].length) {
      // subseq[i] = subseq[p].concat([input[i]]);
      subseq[i] = [...subseq[p], ...[input[i]]];
      if (subseq[maxIdx].length < subseq[i].length) {
        maxIdx = i
      }
    }
   }
  }
  return subseq[maxIdx];
}


// 10 23 24 15 21
const LISString = (str) => {

 let input = str.split(' ').map(elem => parseInt(elem));

 let subseq = input.map(num => [num]);
  let maxIdx = 0;

  for (let i = 1; i < input.length; i++) {
   for (let p = 0; p < i; p++) {
    if (input[p] < input[i] && subseq[p].length + 1 >= subseq[i].length) {

      subseq[i] = [...subseq[p], ...[input[i]]];

      if (subseq[maxIdx].length < subseq[i].length) {
        maxIdx = i
      }
    }
   }
  }
  return subseq[maxIdx];
}

//  [1, 4, 6, 5, 3, 7] => [1, 2, 3]
// [1,4,6,7] = [1] or [4]
// [1]

const LISConsecutive = (input) => {
  let subseq = input.map(num => [num]);
  let maxIdx = 0;

  for (let i = 1; i < input.length; i++) {
   for (let p = 0; p < i; p++) {
    if (input[p] + 1 === input[i] && subseq[p].length + 1 >= subseq[i].length) {

      subseq[i] = [...subseq[p], ...[input[i]]];

      if (subseq[maxIdx].length < subseq[i].length) {
        maxIdx = i
      }
    }
   }
  }
  return subseq[maxIdx];
}



// console.log(LISlength([1, 4, 2, 6, 5, 3, 7]))
// console.log(LIS([1, 4, 2, 6, 5, 3, 7]))
// console.log(LISString('1 4 2 6 5 3 7'))
// console.log(LISConsecutive([1, 4, 2, 6, 5, 3, 7]))

console.log(LISConsecutive([2,4,6,8,12,100, 3]))