function allSubArrays (nums) {
  let res = [];
  let printAllSubArrays = (arr, start, end) => {
    // we have reached the end
    if (end === arr.length) {
        return;
    } else if (start > end) {
      printAllSubArrays(arr, 0, end + 1);
    } else {
      res.push(arr.slice(start, end+1));
      printAllSubArrays(arr, start+1, end);
    }
    return;
  }
  printAllSubArrays(nums, 0, 0);
  return res;
}

console.log(allSubArrays([1,2,3]));