/*

Formation is trying to assign a group of Fellows algorithms of varying difficulty levels. The algorithm difficulty should feel fair to all Fellows based on each Fellow's algorithmic skill level.

We are given an array of integers representing the skill level of each Fellow and we are asked to return an array of integers representing the difficulty of an algorithm to assign each Fellow respectively.

The minimum difficulty is 1. When a Fellow has a higher skill level than an adjacent Fellow they must be given a more difficult problem than their neighbor. Return the array of difficulties representing the minimum difficulty we can give each Fellow.

Examples
fellows = [10, 20, 60, 70, 50, 10, 100]
returns [1, 2, 3, 4, 2, 1, 2]


Example:
[10, 20, 60, 70, 50, 10, 100]
Left-to-right:[1,2,3,4,1,1,2]
Right-to-left:[1,1,1,3,2,1,1]
              [1,2,3,4,2,1,2]



[1, 2, 3, 4, 2, 1, 2]

[70, 50, 10] -> [3,2,1]


[10, 20, 20]
[1, 2, 2]

[100, 90, 80, 70]
[4, 3, 2, 1]


[90, 100, 90, 80, 70]
[1, 4, 3, 2, 1]

[10, 20, 60, 70, 50, 10, 9, 8, 7, 100]
             p1
                                   p2

2 rules:
1. If a Fellow has a higher skill level than an adjacent Fellow they must be given a more difficult problem than their neighbor
2. Return the minimum difficulty we can give each Fellow

If the difficulty level is the same, use the same difficulty
e.g. [10, 20, 20] -> [1, 2, 2]

Function Signature
def assignAlgorithms(fellows):


-------
Potential solutions:
We go up

*/

function assignAlgorithms(fellows) {
  let skills = [];
  let leftToRight = [1];
  let rightToLeft = [1];
  let counter = 1;
  for (let i = 1; i < fellows.length; i++) {
      if (fellows[i-1] < fellows[i]) {
         counter++;
        leftToRight.push(counter);
      } else {
        counter = 1;
        leftToRight.push(1);
      }
  }
  // console.log(leftToRight);
  // [10, 20, 60, 70, 50, 10, 100]
  //
  counter = 1;
  for (let i = fellows.length - 2; i >= 0; i--) {
      if (fellows[i+1] < fellows[i]) {
        counter++;
        rightToLeft.unshift(counter);
      } else {
        counter = 1;
        rightToLeft.unshift(1);
      }
  }

  // console.log(rightToLeft);
  for(let i=0; i < leftToRight.length; i++){
    if(leftToRight[i] > rightToLeft[i]) {
      skills.push(leftToRight[i])
    } else{
        skills.push(rightToLeft[i])
    }

  }
  return skills
}

// test cases
let fellows = [10, 20, 60, 70, 50, 10, 100];
let fellows1 = [10, 10, 10];
let fellows2 = [30, 20, 10];
let fellows3 = [10, 20, 10];
console.log(assignAlgorithms(fellows)); // returns [1, 2, 3, 4, 2, 1, 2]
console.log(assignAlgorithms(fellows1));     // returns [1, 1, 1]
console.log(assignAlgorithms(fellows2)); // returns [3, 2, 1]
console.log(assignAlgorithms(fellows3)); // returns [1,2,1]