/*
bubblesort works by repeatadly swapping adjacent elements if they are not in order
larger elements bubble to the end after each iteration
one optimization: after x iterations, x elements bubble to the end, so we can ignore last x elements
works well with nearly sorted data
bad: O(n^2) runtime
good: O(1) space in place algorithm
      works well 


*/

var bubbleSort = (nums) => {
  var isSorted = false; // start with an assumption that list is not sorted

  while (!isSorted) {  // as long as list is not sorted
    isSorted = true;  // because we are going to sort it

    for (let i = 1; i < nums.length; i++) {
      if (nums[i-1] > nums[i]) {
        isSorted = false; // meaning it's not sorted
        swap(i-1, i, nums);
      }
    }
  }
  return nums;
}

// helper swap function
var swap = (i, j, nums) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(bubbleSort([5,3,2,1]))