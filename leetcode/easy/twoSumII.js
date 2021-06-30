var twoSumBruteForce = function(numbers, target) {
  let pairs = {};
  for (let i = 0; i < numbers.length; i++) {
      let diff = target - numbers[i];
      if (pairs[diff] !== undefined) {
          return [pairs[diff], i];
      } else {
          pairs[numbers[i]] = i;
      }
  }
  console.log(pairs);
  return [-1,-1];

};


var twoSumOptimal = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i+1, j+1];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return [-1, -1];
}

let numbers = [2,7,11,15], target = 9;

console.log(twoSumOptimal(numbers, target));