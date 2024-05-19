// Problem Description
// Given coordinates of a point (x,y) in 2D plane, Find in which quadrant does this point lie.

// Sample Input 1
// -5.5 2

// Sample Output 1
// 2

// Explanation
// The x-coordinate is negative and the y-coordinate is positive which means the point lies in the 2nd quadrant.

function findQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1
    } else if (x < 0 && y > 0) {
        return 2
    } else if (x < 0 && y < 0) {
        return 3
    } else {
        return 4
    }
}

const result = findQuadrant(-5, 5.2)
console.log(result)

//time complexity (T.C): O(1)
//space compexity(S.C): O(1)