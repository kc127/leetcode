/*
1. Reverse letters in words
2. Rotate words by x
3. Rotate array
4. Reverse letters in k chunks
*/


/*
1. Reverse letters in words

'cat is sad' => 'tac si das'
'  cat   is    sad   ' => 'tac si das'
'' => ''
'abcd' => 'dcba'

*/


let reverseLetters = (s) => {
  let chars = removeSpaces(s);

  let start = 0, end = 0;
  let n = chars.length;
  while (end < n) {
    while (end < n && chars[end] !== ' ') {
      end++;
    }
    reverseWord(chars, start, end - 1);
    start = end + 1;
    end++;
  }
  return chars.join('');
}

let removeSpaces = (s) => {
  let chars = [];
  let i = 0;

  while (i < s.length) {
    if (s[i] !== ' ') {
      chars.push(s[i]);
    } else if (chars.length > 0 && chars[chars.length - 1] !== ' ') {
      chars.push(s[i]);
    }
    i++;
  }

  return chars;
}

let reverseWord = (chars, l, r) => {
  while (l < r) {
    [chars[l++], chars[r--]] = [chars[r], chars[l]];
  }
}


/*
3. Rotate Array
*/

let rotateArray = (input) => {
  let start = 0;
  let end = 0;

  while (end < input.length) {
    while (end < input.length && input[end] !== 0) {
      end++;
    }
    reverseNums(input, start, end-1);
    start = end+1;
    end++;
  }
  return input;
}

let reverseNums = (arr, i, j) => {
  while (i < j) {
    [arr[i++], arr[j--]] = [arr[j], arr[i]];
  }
}

console.log(rotateArray([1, 2, 3, 0, 4, 5, 6]));
console.log(rotateArray([1, 2, 3, 4, 5, 6]));
console.log(rotateArray([1, 0, 2, 0, 3]));



/*

2.1 Rotate words by k

*/
let rotateWords = (sentence, k) => {
  let words = sentence.split(' ');
  console.log(words)
  if (k < 0 || k >= words.length) {
    return words;
  }
  let last = words[words.length - 1];

  for (let i = 0; i < k; i++) {
    rotateRightByOne(words);
  }
  return words.join(' ');
}

let rotateRightByOne = (array) => {
  let last = array[array.length - 1];

  for (let i = array.length - 1; i >= 1; i--) {
    array[i] = array[i-1];
  }
  array[0] = last;
}

console.log(rotateWords('rotate please',1));

/*
2.1 Rotate Words O(n), O(k)

*/

let rotateWords = (sentence, k) => {
  let words = sentence.split(' ');

  if (k < 0 || k >= words.length) {
    return words;
  }


  let n = words.length;
  let chars = [...words.slice(n-k)]; // an array with last k words
  for (let i = n-k-1; i >= 0; i--) { // shift first n-k elements to the end
     words[i+k] = words[i];
  }

  // put the chars elements in their correct position in input words
  for (let i = 0; i < k; i++) {
    words[i] = chars[i];
  }
  return words.join(' ');
}


console.log(rotateWords('Rotate the words in this string',2));


/*
4. Reverse letters in k chunks
*/


let reverseChunks = (letters, k) => {

  if (k < 0 || k > letters.length) {
    return letters;
  }
  let start = 0;
  let end = 0;

  while (end < letters.length) {
     while (end < letters.length && end < start + k) {
        end++;
     }

     reverseLetters(letters, start, end-1)
     start = end;
  }
  return letters;
}

let reverseLetters = (arr, l, r) => {
  while (l < r) {
    [arr[l++], arr[r--]] = [arr[r],arr[l]];
  }
}

console.log(reverseChunks(['a','b','c','d','e', 'f', 'g', 'h'],4));


'this is a good cat', k = 1 => 'cat this is a good'
'this is a good cat', k = 2 => 'good cat this is a'
'this is a good cat', k = -1 => 'is a good cat this' // k = 4
                      k = -2 =>   k = 3
'this is a good cat', k = 6 => 'cat this is a good' // k = 1,

    split the input str into words o(n)
    create a temp with last k words  o(k), space: o(k)
    shift all the n-k-1 in words to the right o(n)
    loop through i = 0 to k to put the word from temp array into their correct position in words array o(k)
    join the words to return string o(n)

    time: o(n), space: o(n)
*/

let rotate = (str,k) => {
  if (str.length === 0 || str === null) {
    return '';
  }


  let words = str.split(' ');
  let n = words.length;

  -2 % 3 -> -2
  -5 % 3 -> -2

  // k = ((k % n) + n) % n

  if (k < 0) {
     k = n - k;
  }

  if ( k > n) {
    k = k % n;
  }

  let temp = [...words.slice(n-k)];

  for (let i = n-k-1; i >= 0; i--) {
    words[i+k] = words[i];
  }

  for (let i = 0; i < k; i++) {
    words[i] = temp[i];
  }

  return words.join(' ');
}


console.log(rotate('this is a good cat', 1)) // returns => 'cat this is a good'
console.log(rotate('this is a good cat', 2)) // returns => 'good cat this is a'
console.log(rotate('this is a good cat', 6)) // returns => 'cat this is a good'
console.log(rotate('this is a good cat', -1))
console.log(rotate('this is a good cat', -1e9))


// modulo = >
let reverseLetters = (array, k) => {
  let end = 0;
  let start = 0;

  while (end < array.length) {
     while (end < start + k) {
         end++;
     }
    reverse(array, start, end - 1);
    start = end;
  }
  return array;
}

let reverse = (array, i, j) => {
  while (i < j) {
    [array[i++], array[j--]] = [array[j], array[i]];
  }
}

console.log(reverseLetters('abcdef'.split(''), 2)); // returns [b, a, d, c, f, e]
console.log(reverseLetters('abcdef'.split(''), 6)); // returns [f, e, d, c, b, a]