## Question
**Problem Description**
There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

**Input format**
You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

**Output format**
Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

**Sample Input 1**
UD

**Sample Output 1**
true

**Explanation**
The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

## Answer
- if else
- if U y+1, if D y-1, if L x-1, if R x+1
- check if resulting (x, y)===(0,0). return yes or no