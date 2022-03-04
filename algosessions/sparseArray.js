/*

input: [0, 0, 1, 0, 0, 0, 2, 0, 0, 0]

*/

class SparseArray {
  // O(N) time
  constructor(original) {
    this.map = new Map();
    original.forEach((value, index) => {
      if (value !== 0) {
        this.map.set(index, value)
      }
    })
  }

  // set value at index i
  // O(1) time
  set(i, val) {
    if (val === 0) {
      this.map.delete(i);
    } else {
      this.map.set(i, val)
    }
  }

  // return value at index i
  // O(1) time
  get(i) {
    if (this.map.has(i)) {
      return this.map.get(i);
    } else {
      return 0;

    }
  }
}

const arr = new SparseArray([0, 0, 2]);
arr.set(1, 0)

arr.get(100) // 0? undefined?


const native = [0, 0, 2];
native[1] = 0;
native[5] = 1;
console.log(native);
for (let i = 0; i <= 5; i++) {
  console.log({ key: i, val: native[i] });
}

// change the semantics, always return 0 if not in map
// track array 'length', return undefined if out of bounds
// deleting? no

// let s = '';
// for (let i = 0; i < n; i++) {
//   s += 'hi';
// }
