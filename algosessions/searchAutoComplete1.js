/*

The programming interface for a legacy motor controller accepts commands as binary strings of variable length. The console has a very primitive autocomplete autocorrect feature: given an incomplete command, it will display possible commands that has the incomplete command as a prefix. For example, if '1010' is a possible command and the user enters '10', the interface should return '1010' as a possible autocomplete result.

Implement a data structure that will allow us to efficiently query possible autocomplete results given an incomplete input.

Possible commands = ['000', '1110', '01', '001', '110', '11']


Input -> Output

'0' → ['000', '01', '001']
'1' → ['1110', '110', '11']
'00' → ['000', '001']

'11' -> ['1110', '110', '11']
'001' -> ['001']
'0000' -> [];

assumptions/notes:
- return any order
- return [] if no match found
- if partial matches full, return full
- assume unique values

input: 00
                    0
               0<          1(t)
            0  0   1(t)
        1(t)   0
               1(t)


output: 0001, 00001, 001

trie:
  - trie to store our possible commands
    - addCommand method (iteratively add chars), returns void
  - autoCompleteSearch method would
    - traverse through the end of the input
    - if end of the input is the end of the trie, exact match
    - else perform dfs starting at the end of input
      - dfs (curr, str)
        - check if end of word reached, if yes, push str to results, return
        - else dfs on the children of curr

*/

class TrieNode {
  constructor(val='') {
    this.val = val;
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor(){
    this.root = new TrieNode();
  }

  insert(command) {
    let curr = this.root;
    for (let i = 0; i < command.length; i++) {
      let ch = command.charAt(i);
      if (!curr.children[ch]) {
        curr.children[ch] = new TrieNode(ch);
      }
      curr = curr.children[ch];
    }
    curr.endOfWord = true;
  }


  insertAll(commands) {
    for (let command of commands) {
      this.insert(command);
    }
  }

  autoCompleteSearch(input, commands) {
    let curr = this.root;
    for (let i = 0; i < input.length; i++) {
      let ch = input.charAt(i);
      if (curr.children[ch]) {
        curr = curr.children[ch];
      }
    }
    if (curr.endOfWord) {
      return [input];
    }

    let res = [];
    let commandSoFar = input;
    let dfs = (trie, str) => {
      if (trie.endOfWord) {
        res.push(str);
      }
      for (let child in trie.children) {
         dfs(trie.children[child], str + trie.children[child].val);
      }
    }

    dfs(curr, commandSoFar);
    return res;
  }
}

let t1 = new Trie();
t1.insertAll(['000', '1110', '01', '001', '110', '11']);
console.log(t1.autoCompleteSearch('0'),['000', '01', '001']);
console.log(t1.autoCompleteSearch('1'),['1110', '110', '11']);
console.log(t1.autoCompleteSearch('00'),['000', '001']);