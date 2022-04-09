/*
Given an array of N integers, create an output array of N integers, where each element in the output array is the product of all of the other elements in the input except for the one in that position

Input: [2, 3, 4]
Output: [12, 8, 6]

Input: [0, 1, 2]
Output: [2, 0, 0]

Input: [1, 1, 1]
Output: [1, 1, 1]

Input: [-1, -2, -3]
Output: [6, 3, 2]


*/
Only 1 Player
Player picks a direction
Once nothing can move => Game Over

https://play2048.co/

4x4 grid of blocks
Game starts with 2 random blocks initialized (block is not empty, is filled with nums powers of 2)
Player provides a move direction (*any 4 directions), blocks slide/merge in that direction
** every time a player makes a move towards any direction a new tile with 2 is also created

After every successful move, a new block randomly spawns
Player keeps playing until game over (no more successful moves possible)
                     = how far can you keep going, no real win
Successful move = a move that actually changes the board state
                = any change is tile position and value



you: presentation logic
my job (rules of the game)
- separation of concerns
- there is no concept of specific location

High Level Design of the Game:
 Board = grid 4 * 4
 Tile = 1 Cell with a Value
 Value = Can be Empty, Can be a multiple of 2

 GameManager => control the over flow of the game, keep track of all the moves made by the player

    makeMove(board, direction)
        logic : how to change the board based on the direction
        createANewTile()
        if (gameOver()) =>
        return new state of the board based on the direction change

                                move
                success (true)             fail (false)

                                                 gameOver(board) => if gameOver returns true, return false
                                                                    if gameOver returns false, makeMove()


    createANewTile()

    createANewGame()
        return a brand a new default board state (there is one tile with value 2)

    gameOver(board)
        logic
        return board






                