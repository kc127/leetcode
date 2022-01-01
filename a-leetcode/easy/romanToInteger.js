/**
 * Given a roman numeral, convert it to an integer.
 */
// solution 1
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let romanChars = s.split('');
    let integer = 0;
    for (let i = 0; i < romanChars.length; i++) {
        if (romanChars[i+1] && roman[romanChars[i]] < roman[romanChars[i+1]]) {
            integer += roman[romanChars[i+1]] - roman[romanChars[i]];
            i++;
        } else {
            integer += roman[romanChars[i]];
        }
    }
    return integer;
};



// solution 2
 var romanToInt = function(s) {
  let romanToInteger = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900
  };

  if (s.length === 1) {
      return romanToInteger[s];
  }

  let integer = 0;
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (s[i+1] && romanToInteger[s.substring(i,i+2)] ) {
          integer += romanToInteger[s.substring(i, i+2)];
          i++;
      } else {
          integer += romanToInteger[char];
      }
  }

  return integer;

};