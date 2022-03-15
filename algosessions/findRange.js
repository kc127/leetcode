# /*
#
# Given a sorted array of integers, convert this to a string that represents these numbers as ranges. A range is a series of consecutive numbers and is represented in the output as the first number followed by a dash, followed by the last number.
#
# Examples:
#
# [1, 2, 3] -> ”1-3”
# [1, 3, 4, 5, 7, 9, 10] -> ”1,3-5,7,9-10”
# [2, 7, 8] -> "2,7-8"
# [2, 7, 9] -> "2,7,9"
# [] -> ""
# [-1, 0, 1] -> "-1-1"
#
# [1, 2, 3, 4, 5, 7, 9, 10]
#     c
#        i
#
#   i = 0
#   (outer while) iterate through the array
#   set a startRange value to first el
#   let curr = arr[i];
#   push startRange to results
#   (inner while) is curr + 1 = array[i + 1]
#       yes? i++
#       curr = arr[i+1]
#   no? push startrange into results array
#   push '-' + array[i]
#
#
# outer while loop
#   store range start
#     inner while loop
#       iterate until we find range end
#     close inner while loop
#   if rangeStart === rangeEnd
#     push element into result
#   else (rangeStart !== rangeEnd)
#     push range into result
# close outer while loop
#
#
# */
def findRange(arr: [int]) -> str:
    i = 0
    result = []
    while i < len(arr):
        rangeStart = arr[i]
        while (i < len(arr)-1) and arr[i] + 1 == arr[i+1]:
            i += 1
        rangeEnd = arr[i]
        if rangeStart == rangeEnd:
            result.append(arr[i])
        else:
            result.append(str(rangeStart) + "-" + str(rangeEnd))
    return result.join(",")

# [1, 3, 4, 5, 7, 9, 10] -> ”1,3-5,7,9-10”
# [2, 7, 8] -> "2,7-8"
# [2, 7, 9] -> "2,7,9"
# [] -> "" -
# [-1, 0, 1] -> "-1-1"
#

print(findRange([1,2,3]), 'expect 1-3');