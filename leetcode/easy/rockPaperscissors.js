/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/


/*
 * INPUT: number of ROUNDS
 * OUTPUT: an array of strings (each string is length input integer) with permutation of R and P and S because order matters
 *
 *
 * PSEUDOCODE:
 *   - if rounds is 0, return empty array
 *   - create a container array to save all the permutations
 *   - create a helper function with input string
 *     - if inputString length is equal to rounds
 *        - push inputString to container
 *        - exit
 *     - else
 *         - loop through the possible combination [R, P, S]
 *           - call helper function with newInput = oldInput + currElem of [R, P, S]
 *   - call helper function with empty string as initial input
 *   - return permutation
 */

var rockPaperScissors = function () {
  var rounds = arguments[0] || 3;
  if (rounds === 0) {
    return []
  }

  var allPermutations = [];
  var rpsValue = ['R', 'P', 'S'];

  var recursion = function (string) {
    if (string.length === rounds) {
      allPermutations.push(string);
      return;
    }
    for (var i = 0; i < rpsValue.length; i++) {
      var newInput = string + rpsValue[i];
      recursion(newInput);
    }
  }

  recursion('');
  return allPermutations;
};

