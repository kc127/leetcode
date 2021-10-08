

'''
You have been tasked with building an AB testing library. You are currently working on the logic to determine which group a user should be put in.
Assuming each user has a hash value and 0 <= hash < 1, bucket each user into groups according to the designated weights for each group.
Examples

javascript
getGroup(
  0.7,
  [
    { name: 'A', weight: 1 },
    { name: 'B', weight: 1 }
  ]
)
getGroup returns A if hash < .5, and b if hash is greater than .5 (returns B in this case)

A hash < 0.5

B hash > 0.5
    0.5

getGroup(
  hash,
  [
    { name: 'A', weight: 1 },
    { name: 'B', weight: 1 },
    { name: 'C', weight: 2 },
  ]
)

A = 1
B = 1
C = 2

A+B+C = 4
1/4 = .25
each weight is worth .25

hash boundry

getGroup returns A if hash < .25, and b if hash is greater than .25 < hash < .5, and c if hash is greater than .5 < hash

This will be deterministic

Clarifying questions:
If there is 1 element in the array, return that element
Assume at least 1 element
Weights can be either decimal or whole numbers
Assume weights are positive

If the hash value is equal to the boundary between two weights, you can either return <= or >=

name should be unique strings

----

A - 0.25
A- 0 - 0.25
B - 0.25 - 0.50

Total = 4

Bottom-range = 0
A.weight = 1 / Total
A 0 , .25
Bottom-range = .25
B .25, Bottom-range + B.weight/Total

Possible solutions:
1. Calculate and store normalized weights (lower bound & upper bound) in a map
- how do calculate the normalized weights?
  - normalizedWeight = currentWeight/totalWeight

Time/Space complexity? O(n) for both time & space
What will the key be for the hashmap?
- The problem of the hashmap is if the key is the normalized weight, and the hash value is not exact, we cannot look it up in the map

Can we do this in O(n) time and O(1) space?
First, calculate the total sum of the weights, and store cumulative normalized sum
If cumulative sum is greater than hash value, return that name

for i in range(len(array)):
    upperRange = array[i][weight]/total
    if bottomRange <= hash <= upperRange:
        return array[i][name]
    else:
        bottomRange = upperRange


'''
def getGroup(hsh, array):
    if not 0 <= hsh <= 1:
        return 'error, input out of range'

    total = 0
    for group in array:
        total += group['weight']

    bottomRange = 0
    upperRange = 0

    for group in array:
        upperRange += group['weight']/total
        if bottomRange <= hsh <= upperRange:
            return group['name']
        else:
            bottomRange = upperRange

    return 'error, input out of range'


#tests

hsh1 = 0.4
hsh2 = 0
hsh3 = 1
array1 = [
    { 'name': 'A', 'weight': 2 },
    { 'name': 'B', 'weight': 1 },
    { 'name': 'C', 'weight': 1 }
]

'''
new function here precomputation
'''

# array1 = [
#     { 'name': 'A', 'weight': 2 },
#     { 'name': 'B', 'weight': 3 },
#     { 'name': 'C', 'weight': 4 }
# ]

# array1 = [
#     { 'name': 'A', 'weight': .5 },
#     { 'name': 'B', 'weight': .75 },
#     { 'name': 'C', 'weight': 1 }
# ]
# Value we are looking for will be hash * totalSum
# e.g. if hash was .6, then the number we are looking for is .6*4 = 2.4


print(getGroup(hsh1, array1))
print(getGroup(hsh2, array1))
print(getGroup(hsh3, array1))
'''
What if we wanted to call getGroup many times, and wanted a faster runtime than O(N) (assuming we can precompute/store values)?

Binary search- O(logN) time

What will we precompute for binary search?
- We will pre-compute weights so the new weights will be cumulative


-------

# array1 = [
#     { 'name': 'A', 'weight': .5 },
#     { 'name': 'B', 'weight': .75 },
#     { 'name': 'C', 'weight': 1 }

Hash .7

4 conditions:
1. If current weight is less than hash, and next weight is greater than hash value, we return next name
2. If current weight is less and next weight is less than hash, iterate up
3. If current weight is more and next weight is more than hash, iterate down
4. If currentWeight = 1, return that value (this will handle the case where there is only 1 value in array or if next value is out of bounds)

def getGroupBS(hsh, array, total):
    int lowerIndex = 0
    int currentIndex = array.length / 2
    int upperIndex = array.length-1

    while (lowerIndex <= upperIndex) {
        if(array[currentIndex]['weight'] == 1) {
            return array[currentIndex]['name']
        }

        int nextIndex = currentIndex + 1
        if(array[currentIndex]['weight'] < hash and hash < array[nextIndex]['weight']) {
            return array[nextIndex]['name']
        }
    }
'''










