var secondSmallest = (nums) => {
  let smallest = Number.MAX_SAFE_INTEGER;
  let secondSmallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === smallest) {
      secondSmallest = smallest;
    } else if (nums[i] < smallest) {
      secondSmallest = smallest;
      smallest = nums[i];
    } else if (nums[i] > smallest) {
      secondSmallest = nums[i];
    }
  }
  return [smallest, secondSmallest];
}

let nums = [0 , 2 , 10 , 3, -3];
console.log(secondSmallest(nums));