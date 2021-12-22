/**
Let X be a set of n intervals on the real line. We say that a set of points P "stabs" X if every interval in X contains at least one point in P. Compute the smallest set of points that stabs X.

Function Signature: func stabPoints(input: [(String, String)]) -> [Int]

[(1, 4), (2,3), (4, 5), (7, 9), (9, 12)] => [4, 9].

      interval = [start, end]

      interval is the element in the X array
      (2,3), (1, 4), (4, 5), (7, 9), (9, 12
      sort the X array by end in interval
      (2,3), (1, 4),(4, 5), (6,8) (7, 9), (9, 12)

       if end is not in the range of the curr point
          add the end to set P
       P = (3,5,9)

       time: o(nLogn) sorting algo
       space = o(n)
**/

function nIntervals (input) {
  let stabPoints = new Set();

  input.sort((a,b) => a[1]-b[1]);
  stabPoints.add(input[0][1]) // 3

  for (let i = 1; i < input.length; i++) {
     let [start, end] = input[i];
     let [pStart, pEnd] = input[i-1];

     if (start > pEnd) {
        stabPoints.add(end);
     } else if (start === pEnd) {
        stabPoints.add(pEnd);
     }
  }
  return stabPoints;
}

console.log(nIntervals([[2,3],[1, 4],[4, 5], [7, 9], [6,8], [9, 12]])); // [3,6,4,9]