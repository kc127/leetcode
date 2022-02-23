/*
Given two arrays of integers, a and b, check if they are "mostly" equal except for the
regions specified by bad_intervals.
bad_intervals is an array of tuples [x, y], where each [x, y] specifies an interval
of the array that should not be checked for equality. For example if an interval [3, 10] is
specified, then the two arrays can differ in positions 3 to 10 inclusive and still be
considered mostly equal.


def is_mostly_equal(a, b, bad_intervals):
    return False

print(is_mostly_equal([1, 2, 3], [1, 2, 3], [])) # should return  true
print(is_mostly_equal([1, 2, 3], [1, 3, 3], [])) # should return false
print(is_mostly_equal([1, 2, 3], [1, 3, 3], [[0, 1]])) # should return true

[1, 2, 3], [1, 2, 3], badInterval = [] return true
[1, 2, 3], [1, 3, 3], [] return false
[1, 2, 3], [1, 3, 3], [[0, 1]] return true

[1, 2, 3, 4, 4], [1, 2, 3, 0, 0], [[0, 1],[3, 4]] return true
       ^                ^

merge intervals
bad intervals = [[0, 1],[1, 4]] => [0, 4]
two pointers i and j


[[0, 1],[3, 4]]
sort the intervals using starting index (interval = [start, end]) (o(nlogn))
i = 0
for each interval
  [start, end]
    [0, 1]            i = end + 1 = 2, 3, 4,
    [5, 8]
    if start of curr interval is greater than curr i
       yes: compare a[i] and b[i] => if not equal return false else continue
       no: i = end + 1

[1, 2, 3], [1, 3, 3], [[0, 1]]
       ^          ^

array of length 10
last interval = [start, 9], i = 10
last interval = [start, 8], i = 9


time: o(nlogn) + o(m)
O(nlogn + m)

assumptions:
- equal length arrays
- multiple bad_intervals
- end within the bounds of a and b
*/
function isMostlyEqual(a, b, badIntervals) {

  if (badIntervals.length === 0) {
     return compareAllElements(a, b);
  }

  badIntervals.sort((a, b) => a[0]-b[0]);

  let i = 0;
  for (let [start, end] of badIntervals) {
     while (start > i) {
        if (a[i] !== b[i]) {
            return false;
        }
        i++;
     }
     if (end < i) continue;
     i = end + 1;
  }

  if(i < a.length) {
    return compareAllElements(a.slice(i), b.slice(i));
  }

  return true;
}


function compareAllElements(a, b) {
  let i = 0;

  while (i < a.length) {
    if (a[i] !== b[i]) {
      return false;
    }
    i++;
  }

  return true;
}

console.log(isMostlyEqual([1, 2, 3], [1, 2, 3], []), 'expect true');
console.log(isMostlyEqual([1, 2, 3], [1, 3, 3], []), 'expect false');
console.log(isMostlyEqual([1, 2, 3], [1, 3, 3], [[0, 1]]), 'expect true');
console.log(isMostlyEqual([1, 2, 2], [1, 3, 3], [[0, 1]]), 'expect false');
console.log(isMostlyEqual([1, 2, 3, 4, 5, 6, 9], [1, 2, 3, 4, 5, 6, 7], [[0, 1], [4, 5]]), 'expect false');
console.log(isMostlyEqual([1, 2, 3, 4, 5, 6, 9], [1, 2, 3, 4, 5, 6, 9], [[4, 5], [0, 4]]), 'expect true');
console.log(isMostlyEqual([1, 2, 3, 4, 5, 6, 8], [1, 2, 3, 4, 5, 6, 9], [[4, 5], [0, 4]]), 'expect false');
console.log(isMostlyEqual([1, 2, 3, 4, 5, 6, 8], [1, 2, 3, 4, 5, 6, 9], [[0, 6]]), 'expect true');
console.log(isMostlyEqual([1, 2, 3, 4, 5, 6, 8], [1, 2, 3, 4, 5, 6, 9], [[0, 4], [2, 3]]), 'expect false');
