var interleave = (...args) => {
  let arrays = [...args];

  let output = [];
  let maxArr = Math.max(...arrays.map(arr => arr.length));

  for (let i = 0; i < maxArr; i++) {
    for (let arr of arrays) {
      if (i < arr.length) {
        output.push(arr[i]);
      }
    }
  }
  return output;
}

let arr1 = [1,2,3];
let arr2 = ["a", "b"];

console.log(interleave(arr1, arr2))