"""
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
1110 -> [1110]

- return any order
- if partial matches full, return full
- if no matches, return []
- assume unique values


apple
app
bat

                    {a
                     b} F
                {p}F    {a} F
             {p}T           {t} T
        {l}F
    {e}T

            {1} F
        {1} F
    {1} F
{0} T


00 -> [001, 000]

         null
        /
        0
        |
        0 //00 - end of input length
       / \
     1(t)  0(t)

       {1, 0}

class TrieNode
    children = {}
    endOfWord

class Trie
    def insert(command)
        - split into characters, check if character in Trie
            - if not, create another Node
            - if, continue through trie

    def searchCommand(command)  // exact match
        return true/false
    def searchPrefix(command)  // prefix match
        return true/false

    def autocomplete(query)
        - traverse until end of input
          - at any point if trieNode doesn't match input[char]
        - dfs



"""



class TrieNode:
    def __init__(self):
        self.children = {}
        self.endOfWord = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, command):
        current = self.root
        for number in command:
            if number not in current.children:
                current.children[number] = TrieNode()
            current = current.children[number]
        current.endOfWord = True

    def autocomplete(self, input, commands):
        result = []
        current = self.root

        for number in input:
            if number in current.children:
                current = current.children[number];
'''
        null
        /
        0
        |
        0 //00 - end of input length
       / \
     1(f)  0(t)
      |
      0(t)
       {1, 0}
'''     str = input;
        let dfs = (current, result, str) => {
            if (current.endOfWord === True)
                # push to result
                res.push(str);
                return;
            }
            for child in current.children
                dfs(child, result, str + child)

        }

        dfs(current, result, str);
        return result;







