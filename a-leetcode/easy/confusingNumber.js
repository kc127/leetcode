/**
 * @param {number} n
 * @return {boolean}
 */
 var confusingNumber = function(n) {

  let map = {0:'0',
     1:'1',
     6:'9',
     8:'8',
     9:'6'}


let strN = String(n);
let reverse = [];
for (let i = strN.length - 1; i >= 0; i--) {
   let c = strN[i];
   if (map[c] === undefined) {
      return false;
   }
   if (map[c]) {
     reverse.push(map[c]);
   }
}
return n === Number(reverse.join('')) ? false : true;
};