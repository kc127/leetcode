/*
find the contiguous sequence of block that is the cheapest for the city and return the cost

block size = 3

   x    x    x    x      x    x
  30k  50k  20k  1000k  50k  80k
  -------------
    20+30=50k
            ---------------
              980+950k=1.93M

       -------------
       950+980

  block size = 2

  20, 30, 10
  -----
   10K
      ------
        20K


 block size = 2
 30, 50, 20, 50
              ^
 start = 2
 end = start + block size = 2 + 2 - 1 = 3;
 maxSalary = 50

 let totalCost = 20;

 total houses = n
 seq of block size = b
 total time complexity = O(nb)
 space complexity = O(1)


total cost = (max block value - element value ) for all elements

           = max block value * block size - (element value) for all elements
           = max block value * block size - sum(block)
           = Math.min(totalCost, max block value * block size - sum(block));

           block size = 3
           50, 30, 90, 50
                   e
               s

          maxSalary = max(new element at start, new element at end) = 90
          totalCost = min(20,x)
          sum = 30 + 50 - 30


          block size = 3
           50, 30, 90, 40
               s
                        e
           40  60
           sum = 30 + 90 + 40 = 160
           maxSalary = 90
           totalCost = 90 * 3 - 160 = 110

          k = 4
          tC = min (120, 240 - 240)
          maxS = 60
          sum = 50 + 70 + 60 + 60= 240

          100, 50, 70, 60, 60
                    e
                s
               20 + 0 + 10 + 10 = 40

*/

function computeCost(arr, k) {
  let totalCost = Infinity;
  let maxSalary = -Infinity;
  let start = 0;
  let end = 0;
  let sum = 0;

  for (end = 0; end < arr.length; end++) {
      sum += arr[end];
      maxSalary = Math.max(maxSalary, arr[end]);
      if (end - start + 1 >= k) {
         let cost = maxSalary * k - sum;
         totalCost = Math.min(totalCost, cost);
         sum -= arr[start];
         start++;
         maxSalary = Math.max(...arr.slice(start, end + 1));
      }
  }
  return totalCost;
}

// console.log(computeCost([50,30,90,40],3), " expect 100");
// console.log(computeCost([50,30,90,50],3), " expect 100");
// console.log(computeCost([20, 20, 20, 20], 3), " expect 0");
console.log(computeCost([100, 50, 70, 60, 60], 4), " expect 40");
