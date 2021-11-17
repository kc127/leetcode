// optimal with o(n) time;

function monotonic (nums) {

  let currSum = nums[0];
  let globalSum = nums[0];
  let start = 0;
  let end = 0;
  let map = {};
  map[globalSum] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= nums[i-1]) {
      if (nums[i] + currSum < nums[i]) {
        currSum = nums[i];
        start = i;
      } else {
        currSum = nums[i] + currSum;
      }
      if (globalSum < currSum) {
        end = i;
        globalSum = currSum;
      }
      map[globalSum] = nums.slice(start, end + 1);
    } else {
      start = i;
      currSum = nums[i];
      globalSum = nums[i]
    }
  }
  return Object.keys(map).reduce((a,b) => parseInt(a) > parseInt(b) ? map[a] : map[b]);
}

console.log(monotonic([1, 3, 10, 2, 3, 4])) // returns [1,3,10];



// NON-OPTIMAL really bad runtime

// [1, 3, 10, 2, 3, 4] returns [1, 3, 10]

// [1,3,10] return
// [2,3,4]

// find all subarrays
// check if subarray is monotonic
// if yes, store it's sum on object
// return monotonic subarray with max sum from the object


*/
let res = {};
function monotonic (nums) {

  let subarrays = generateAllSubArrays(nums, 0, 0);

  let maxSum = 0;
  let maxSubarray;
  for (let subarray in subarrays) {
    if (Number(subarray) > maxSum) {
        maxSum = Number(subarray);
        maxSubarray = subarrays[subarray];
    }
  }
  return maxSubarray;
}


function generateAllSubArrays(nums, start, end) {

  if (end === nums.length) { // reached end
     return res;
  } else if (start > end) {
    generateAllSubArrays(nums, 0, end+1);
  } else {
    let subarray = nums.slice(start, end+1)
    if (isMonotonic (subarray)) {
       let subArraySum = computeSubArraySum(subarray)
       res[subArraySum] ? res[subArraySum].push(subarray) : res[subArraySum] = [subarray];
    }
    generateAllSubArrays(nums, start+1, end);
  }
  return res;
}


function isMonotonic(nums) {
  return nums.every((num, i) => i === 0 || num >= nums[i-1])
}

function computeSubArraySum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
     sum += nums[i] * (nums.length - i) * (i + 1);
  }
  return sum;
}


console.log(monotonic([1, 3, 10, 2, 3, 4]));