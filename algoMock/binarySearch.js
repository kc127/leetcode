/*
Given a sorted array and a target element, return the count of the target element in the array

[1, 2, 3, 4, 5], target = 5
return 1

[1, 2, 3, 4, 5, 5], target = 5
return 2

[1, 2, 2, 3, 4, 5, 5], target = 5
return 2

[1, 2, 2, 3, 4, 5, 5], target = 0
return 0

count
binary search
time: O(logn), space : O(1)

 0  1  2  3  4  5
[1, 2, 3, 4, 5, 5], target = 5
                r
                m
                l

firstIdx = 4
lastIdx  =
count = lastIdx - firstIdx + 1

  count = 2
m = l + Math.floor((r-l)/2) = 5 + 0 = 5

  l      m      r
  0      3      5
  3      4      5
  5      5      5



[5, 5, 5, 5, 5, 5], target = 5
 l              r

     f     l
 [1, 1, 1, 2, 2, 2], target = 2
  l     m        r
 [1, 2, 2, 2, 3, 4], target = 2
           l  r

 [1, 2, 2, 2, 3, 4], target = 1
  l     m        r

  first idx
  while (l <= r)
    compute m
    if (arr[m] < target)
        l = m  + 1
    else if (arr[m] >= target
        r = m  + 1

    last idx
        arr[m] <= target
          l = m + 1
        arr[m] > target
          r = m - 1



 count = 1
 if a[l] === target
    count++

[4, 5, 5, 5, 5, 5], target = 5
return input.length - 1







MAIN FUNC (input, target)
  checkDup(input, target) => return boolean,   o(n)

  if yes return length of input
  if no binary search    o(logn)

total time ~ O(n + logn) ~ O(n)

checkDup
  return if all elements are equal to target or not

l, r
while (l <= r)
  compute m
  if arr[m] <= target
    reset my firstIdx
    l = m + 1
  else

    r = m - 1

*/