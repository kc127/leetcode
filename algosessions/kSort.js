/*
Given an array where each number is located at most k places away from its sorted position, fully sort the array.

Examples
input -> output

[1, 3, 4, 2, 6, 5], k = 2  ---> [1, 2, 3, 4, 5, 6]

[1,3,4] ==>[5,6]
[1,2,3,4,5,

     1
  3    4


[1, 3, 4, 2, 6, 5]


 index 0 = 1, 3, 4 (min)

[9, 10, 8, 12, 11], k = 2
i : 0 = 9, 10, 8 => 8

[8, 10, 9, 12, 11], k = 2
i : 1 = 10, 9, 12

[8, 9, 10, 12, 11]
i : 2 = 10, 12, 11

[8, 9, 10, 12, 11]
i : 3 = 12, 11

[8, 9, 10, 11, 12]
i : 4 = 12

Assumptions
- no overflow/wrap around
- k goes both ways
- number can in already in correct position
- k not greater than the length of the input array


iterate over the input  O(nk)
i is the current index
check all the numbers in the window
  inner loop that compares the nums in the window
  swap the smallest item we find with the curr index
end loop 1 before last item
return original input



*/
function kSort(input, k) {

  for (let i = 0; i < input.length - 1 ; i++) {

     // [9, 8, 7, 12, 11] k=2
     // i = [0, 3]

     let min_i = i;
     let j = i + 1;
     while ((j <= i + k) && (j < input.length)) {
       if (input[j] < input[min_i]) {
         min_i = j
       }
       j++;
     }
     [input[i], input[min_i]] = [input[min_i], input[i]]
  }

  return input;
}

let input = [1, 3, 4, 2, 6, 5]
let input2 = [9, 10, 8, 12, 11]
let k = 2
console.log(kSort(input, k))
console.log(kSort(input2, k))
console.log(kSort([10,20,30,40,60,70], 0))
console.log(kSort([3, 2, 1, 4, 5, 7, 6, 10, 9 ], 5))