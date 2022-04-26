/*
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

follow up: what is there were more than 1 unique swap? how would you solve that?
  t a b c y
  y a c b t

looking for O(n) time and space

assumptions:
- unequal length
- only one swap possible
- case sensitive
- swaps don't have to be with chars next to each other

s = 'bat' => 'tab', goal = 'tab', return true
s = 'aap', goal = '', return false
s = 'a', goal = 'b', return false
s = 'xyz', goal = 'xyz', return false
s = 'Xyz', goal = 'zyx', return false
s = 'ab1', goal = '1ba', return true
s = 'ab c', goal = 'ba c', return true
                 = 'abc ', return true
                 = ' bac', return true
missed edge case
s = 'yellow', g = 'yellow', return true because 2 pairs of l can be swapped

s = t a b b y
g = a t b b y
    i
      j

s = t a b
g = t a b
          i
        j

s = a
g = b
      i
    j

approach:
- if unequal length, return false
- i = 0, j = n - 1;
  as long as i <= j
      while i <= j && s[i] === g[i]
          i++

      while i <= j && s[j] === g[j]
         j--

      compare the i_pair with j_pair
        if equal, return true
        if unequal, return false

return true

*/

function isEqual(s, g) {
  if (s.length !== g.length) {
    return false;
  }
  let n = s.length;
  let i = 0;
  let j = n - 1;

  while (i <= j) {

    while (i <= j && s[i] === g[i]) {
       i++;
    }

    while (i <= j && s[j] === g[j]) {
      j--;
    }
    if (i >= n || j >= n) {
       return false;
    }
    if (s[i] === g[j] && s[j] === g[i]) {
        return true;
    } else {
        return false;
    }
  }
}

console.log(isEqual('bat', 'tab'), ' expect true');
console.log(isEqual('aap', ''), ' expect false');
console.log(isEqual('a', 'b'), ' expect false');
console.log(isEqual('xyz', 'xyz'), ' expect false');
console.log(isEqual('Xyz', 'zyx'), ' expect false');
console.log(isEqual('ab1', '1ba'), ' expect true');
console.log(isEqual('ab c', 'ba c'), ' expect true');
console.log(isEqual('ab c', 'abc '), ' expect true');
console.log(isEqual('ab c', ' bac'), ' expect true');
console.log(isEqual('q', ' q'), ' expect false');
console.log(isEqual('yellow', 'yellow'), ' expect true');