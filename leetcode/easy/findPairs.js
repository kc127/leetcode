function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    let y = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === y + k) {
        pairs.push([arr[j], y]);
      }
    }
  }
  return pairs;
}


function findPairsOptimal (arr, k) {
  if (k === 0) {
    return [];
  }

  let pairs = [];
  let diff = new Map();

  for (let x of arr) {
    diff.set(x-k, x);
  }

  for (let y of arr) {
    if (diff.has(y)) {
      pairs.push([diff.get(y), y])
    }
  }

  return pairs;
}


let arr = [0, -1, -2, 2, 1], k = 1

console.log(findPairsOptimal(arr, k))