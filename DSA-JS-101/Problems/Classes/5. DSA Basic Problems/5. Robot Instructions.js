// Problem Description
// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// Input format
// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Output format
// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Sample Input 1
// UD

// Sample Output 1
// true

// Explanation
// The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.


//tc = n, sc=1
function robotReturnToOrigin(moves) {
    let x = 0, y = 0
    for (let i = 0; i < moves.length; i++) {

        switch (moves[i]) {
            case 'U':
                y++
                break
            case 'D':
                y--
                break
            case 'L':
                x--
                break
            case 'R':
                x++
                break
        }
    }

    return x === 0 && y===0
}
let moves = 'UDLRL';
let res = robotReturnToOrigin(moves);
console.log(res);