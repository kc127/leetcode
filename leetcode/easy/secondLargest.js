var secondLargest = (nums) => {
  let largest = nums[0];
  let secondLargest = Number.MIN_SAFE_INTEGER;
  let thirdLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === largest) {
      thirdLargest = secondLargest;
      secondLargest = nums[i]
    } else if (nums[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] < largest && nums[i] > thirdLargest) {
      thirdLargest = nums[i];
    }

    console.log([largest, secondLargest]);
  }
  return [largest, secondLargest, thirdLargest];
}

let nums = [0 , 2 , 10 , 3, -3];
console.log(secondLargest(nums));