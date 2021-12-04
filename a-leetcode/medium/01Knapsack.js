/*Q. Given weights and values of of items, put these items in a knapsack of capacity c to get the maximum total.

Note:
• You are given two array of integers values and weights which represent values and weights of given items respectively and c which represents knapsack capacity.
• Compute the maximum value subset of values such that sum of the weights of this subset does not exceed c.
• You cannot include a fraction of an item nor include the same item multiple times.

Example:
• Given: values = [6, 9, 13], weights = [1, 2, 3], c = 5 // returns 22
• Note: 9 + 13 (weight: 2 + 3 <= 5)


                        maxWeights
                    0  1  2   3  4  5
$0     [0]       0  0  0  0   0  0  0
$6     [1]       1  0  6  6   6  6  6
$9     [1,2]     2  0  6  9  15 15  15
$13    [1,2,3]   3  0  6  9  15 19  22

            case 1: when currItem's weight <= maxWeight
                      withItem = $13 + 0
                      withOutItem = 15
                             max = $9
            case 2: when currItem's weight > maxWeight
                      table[row-1][sameweight]


*/
function knapsack(limit, items) {
    let dp = [];
    let weights = Object.keys(items) // [1,2,3]
    let values = Object.values(items) // [6,9,13]

    if (items.length === 0)  {
      return 0;
    }

    // O(v*limit)
    for (let i = 0; i < values.length + 1; i++) {
      let row = Array(limit+1).fill(0);
      dp.push(row);
    }

    // O(V * limit)
    // fill the dp table bottom up
    for (let item = 0; item <= values.length; item++) {
        for (let weight = 0; weight <= limit; weight++) {
            let currItem = item - 1;

            if (item === 0 || weight === 0) {
               dp[item][weight] = 0;
            } else if (weights[currItem] <= weight) {
               let withItem = values[currItem] + dp[item-1][weight - weights[currItem]]
               let withoutItem = dp[item-1][weight];

               dp[item][weight] = Math.max(withItem, withoutItem);
            } else {
               dp[item][weight] = dp[item-1][weight]
            }
        }
    }
    return dp[values.length][limit];
}