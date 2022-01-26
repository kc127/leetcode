/*
Prompt:
Today, you will be printing out the kth line in a text input.

Given a text input, print out the kth line in the file.

Function Signature: func printLine(text: String, lineNumber: Int)

'\n'
input str = "What is your name?\nMy name is Kanchan" k = 1 => "My name is Kanchan"
input str = "What is your name?\nMy name is Kanchan\nWhere are you from?\nI am from Atlanta", k = 3 => "I am from Atlanta"

input str = "I am from Atlanta\n", k = 0 => "I am from Atlanta"
input str = "I am from Atlanta\n", k = 1 => ""

time: o(n), space: o(n)
split the input string using \n separator => o(n)
return the str at kth index o(1)


"What is your name?\nMy name is Kanchan\nRandmomasdljlsd", k = 0
 ^
 s                                      i
                      i
return str.slice(l);

*/


// function printLine(text, k) {
//     if (k < 0) {
//         return "";
//     }

//     let lines = text.split('\n');

//     if (k >= lines.length) {
//         return "";
//     }

//     return lines[k];
// }


// Runtime and space complexity:
// Runtime: O(kl), where k is the line number and l is the average # of characters per line.
// Space: O(n), where n is the number of characters in the file.

function printLineIterative(text, k) {
  if (k < 0) {
     return "";
  }

  let i = 0;
  let lineNumber = 0;
  let startIdx = 0;
  let resultStr = ""
  while (i < text.length) {
      startIdx = i;
      while (i + 1 < text.length && (text[i] + text[i+1] !== '##')) {
           i++;
      }

      if(k === lineNumber){
         resultStr = text.slice(startIdx,i);
         break;
      }
      lineNumber++;
      i += 2;
  }

  return resultStr;
}

//console.log(printLineIterative("a\nb",0));
console.log(printLineIterative("What is your name?##My name is Kanchan",0), "My name is Kanchan");
// console.log(printLineIterative("What is your name?\nMy name is Kanchan",-1), "");
// console.log(printLineIterative("What is your name?\nMy name is Kanchan\nWhere are you from?\nI am from Atlanta",3),"I am from Atlanta");
// console.log(printLineIterative("What is your name?\nMy name is Kanchan\n",0), "What is your name?");
// console.log(printLineIterative("What is your name?\nMy name is Kanchan\n",8), "");
