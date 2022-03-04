


#
# Your previous JavaScript content is preserved below:
#
# Given an array of 0s and 1s, group all 0s on one side and 1s on the other side using the minimum number of moves possible. A "move" is a swap between any adjacent positions.
# Examples
# [0, 1] => 0, no swaps are needed since they are already grouped.
# [0, 1, 0] => 1, swap 1 with either 0 to group them.
# [1, 0, 1, 1, 0] => 2, swap 0 with 1 then swap it again with the next 1.
# -> [1,1,1,0,0] -> 2 swaps
#
# [1, 0, 1] => 1 move
# [0, 1, 1]
# [1, 1, 0]
#
#
# /*
# standard: all the 0s to left, all the 1s to the right
#
# i  0 1 2 3
#    0 1 1 0 => 0 0 1 1
#          ^
#    1 0 1 0
#    1 1 0 0
#
#    return 2
#
#   0 1 1 0 1 0
#     l
#         r
#
#     l
#             r
#   0 1111111 0
#   1 0 => 0 1
#
#   l = 0;
#   r = 1;
#   movesSoFar = 0
#   minMoves =
#
#   while (l < r && r < arr.len)
#     case 1:
#       if arr[l] is 1
#         while arr[r] != 0
#           increment r
#          diff = r - l
#          movesSoFar += diff
#
#          l++;
#          r++;
#
#     case 2: if arr[l] is 0
#             l++
#
#
#
#
#
# */

'''
      l
        r
    0 1 1 0

'''
# This currently moves the 0s to the left, 1s to the right
def calMinMoves(arr):

    def calcMinDir(arr, begin, end):
        l = 0
        r = 1

        movesSoFar = 0

        while(r < len(arr)): # r

            if arr[l] == end: # if arr[l] === 0
                while r < len(arr) and arr[r] != begin:
                    r += 1
                diff = r - l
                movesSoFar += diff
            l += 1
            r += 1

        return movesSoFar

    x = calcMinDir(arr, 0, 1)
    y = calcMinDir(arr, 1, 0)
    print(f'x {x}, y {y}')
    return min(x, y)

    # l  r
    # 1, 0, 1, 1, 0



# print(calMinMoves([0, 1])) # expecting 0
# print(calMinMoves([0, 1, 0])) # 1
print(calMinMoves([1, 0, 1, 1, 0])) # 2 // [0, 0, 1, 1, 1] (4) vs [1 1 1 0 0] (2)
# print(calMinMoves([0])) # 0
# print(calMinMoves([0, 1, 1, 0] )) #  2

