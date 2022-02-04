Drawing Mode
1
/*
2
​
3
Prompt:
4
​
5
In front of you is a row of N coins, with values v1, v1, ..., vn.
6
​
7
You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row, removing it from the row, and receiving the value of the coin.
8
​
9
Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.
10
​
11
Function Signature: func playGame(_ input: [Int]) -> Int
12
​
13
[10, 24, 5, 9] => 33
14
​
15
[10] => 10
16
[10, 22] => 22
17
[10, 20, 9] => 19
18
​
19
arr = [10, 24, 5, 9]
20
       i          j
21
​
22
      me            op
23
      arr[i]       arr[i+1, j]
24
                   max(arr[i+1], arr[j])
25
      arr[i+2,j]
26
      arr[i+1,j-1]
27

28
      -----
29
      arr[j]        arr[i,j-1]
30
                    max(arr[i],arr[j-1])
31
      arr[i+1,j-1]
32
      arr[i,j-2]
33

34

35
        10    24    5    9
36
        i                j
37

38

39

40
        let maxCoin =
41
        player1 selects i
42
           currState = [24, 5, 9]
43
           nextState = [5,9]
44
           let firstCoin = f(nextState, first)
45
           let endCoin = f(nextState, end)
46

47

