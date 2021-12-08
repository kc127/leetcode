/**
 * @param {string} dominoes
 * @return {string}
 */
 var pushDominoes = function(dominoes) {
  if (dominoes.length === 0 || dominoes === null) {
      return [];
  }

  let leftToRight = Array(dominoes.length).fill(0);
  let rightToLeft = Array(dominoes.length).fill(0);
  let prev = '.';
  let counter = 1;
  for (let i = 0; i < dominoes.length; i++) {
      if (dominoes[i] === 'R') {
          prev = 'R';
          counter = 1;
          continue;
      } if (dominoes[i] === 'L') {
          prev = 'L';
      }
      if (prev === 'R' && dominoes[i] === '.') {
          leftToRight[i] = counter;
          counter++;
      }
  }

  prev = '.';
  counter = 1;
  for (let i = dominoes.length - 1; i >= 0; i--) {
      if (dominoes[i] === 'L') {
          prev = 'L';
          counter = 1;
          continue;
      } else if (dominoes[i] === 'R') {
          prev = 'R';
      }
      if (prev === 'L' && dominoes[i] === '.') {
          rightToLeft[i] = counter;
          counter++;
      }
  }

  let res = '';
  for (let i = 0; i < dominoes.length; i++) {
      if (leftToRight[i] === 0 && rightToLeft[i] === 0) {
          res += dominoes[i];
      } else if (leftToRight[i] === 0) {
          res += 'L'
      } else if (rightToLeft[i] === 0) {
          res += 'R'
      } else if (leftToRight[i] === rightToLeft[i]) {
          res += '.'
      } else if (leftToRight[i] < rightToLeft[i]) {
          res += 'R';
      } else {
          res += 'L';
      }
  }
  return res;
};