/*
O(n) time and O(n) space
*/

function getPairs (bishops, m) {
  let topLeft = 0;
  let topRight = 1;
  let count = new Map();
  for (let [r,c] of bishops) {
    let rTopLeft = (r-Math.min(r,c));
    let cTopLeft = (c-Math.min(r,c));

    let rTopRight = (r-Math.min(r,m-c));
    let cTopRight = (c-Math.min(r,m-c));

    count.set(`${[rTopLeft,cTopLeft,topLeft]}`, (count.get(`${[rTopLeft,cTopLeft,topLeft]}`) || 0)  + 1)
    count.set(`${[rTopRight,cTopRight,topRight]}`, (count.get(`${[rTopRight,cTopRight,topRight]}`) || 0)  + 1)

  }

  let pairs = 0;
  count.forEach(val => {
    pairs += combo(val);
  })
  return pairs;
}

function combo(n) {
  return n * (n-1)/2;
}

console.log(getPairs([[0, 0], [1, 2], [2,2]], 4), 2);
console.log(getPairs([[0, 0], [1, 2], [2,2],[4,0]], 5), 2);
console.log(getPairs([[0, 0], [4,4]],4), 1);
console.log(getPairs([[0, 0], [2, 2], [3, 3]],3), 3);




// Given a chess board with a set of bishops, return the number of pairs of bishops that are attacking each other. Bishops will be given as an array of tuples.

// Examples
// Bishops: [(0, 0), (2, 2), (1, 2), (3, 0)]
// This would look like this:
// . . . . .
// . . x . x
// . x . x .
// x . . . x
// . . . . .

// (1, 2) (2, 3) => x2-x1 = 1, y2-y1 = 1
// (1, 2) (3,4) =>
// (2, 3) (1,4) => 2 + 3 = 5, 1 + 4 = 5
//  x1,y1  x2,y2=> 1-2 = -1, 4-3 = 1

// (3,0) =>
// (1,2) => (2, 1)
// (1,2) =>? (3, 0)

// In this case, there are 2 pairs of bishops attacking each other.

// input: n * n board, array of tuples

// Bishops: [(0, 0), (2, 2)]
// x . . . .
// . . . . .
// . . x . .
// . x . x .
// . . . . x


//   O(n^2) time
//   comparing each bishop with the rest of the bishops in the bishops array
//       verify if curr bishop is in the same diagonal as the next bishop
//       if yes => increment our pairs counter
// */


// function getPairs(bishops) {
//   let numPairs = 0;

//   for (let i = 0; i < bishops.length; i++) {
//     for (let j = i + 1; j < bishops.length; j++) {
//       let jBishop = bishops[j];
//       let iBishop = bishops[i];

//       if (Math.abs(jBishop[0] - iBishop[0]) === Math.abs(jBishop[1] - iBishop[1])) {
//         numPairs++;
//       }
//     }
//   }

//   return numPairs;
// }

// console.log(getPairs([[0, 0], [2, 2], [1, 2], [3, 0]]), 2);
// console.log(getPairs([[0, 0], [4,4]]), 1);
// console.log(getPairs([[0, 0], [2, 2], [3, 3]]), 3);
// console.log(getPairs([[0, 0], [0, 2], [1, 1],[2,0],[2,2]]), 6);
// console.log(getPairs([[0, 0], [0, 2],[1,0],[2,0],[2,2]]), 2);

// 1 * (n-1)
// 2 * (n-2)

// /**

// [0,0],
// [1,1],
// [2,2],



// [0,2]

// mapSum
// mapDif

// (0, 0), (2, 2), (1, 2), (3, 0)
//                 i

// mapSum[0 + 0] = 1
// mapSum[2 + 2] = 1
// mapSum[1 +2] = 1
// mapDif[abs(0 - 0)] = 2
// mapDif[abs(1 - 2)] = 1

// 1 + 2
// abs(1 - 2)
// . . . . .
// . . . . .
// . . x . x
// . . . x .
// . . . . x


// 1 + 1 + 2 + 1 + 1 => 6


// x . . . x
// . . . . .
// x . . . .
// . . . . .
// x . . . x

// returns 2

// **/

