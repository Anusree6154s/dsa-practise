// Problem Description
// Given a number n, you have to calculate the factorial of that number.

// Input format
// First line contains an integer - n

// Output format
// Print the factorial of the given number.

// Sample Input 1
// 3

// Sample Output 1
// 6

// Explanation
// 3! = 3.2.1 = 6

// Constraints
// 0 <= n <= 10

// function factorialDSA(n) {
//     if(n===1){
//         return 1
//     }

//     let product = n * factorialDSA(n-1)
//     return product
// } 

// let n = 3
// const result = factorialDSA(n);
// console.log(result)
 



function zigzagLevelOrder(root) {

    if (!root) {
        return;
    }

    let ans = [[]]
    let currentLevel = [root]
    let nextLevel = []

    let leftToRight = false //flag to reverse currentLevel at alternate levels
    // want to pop next level left to right, 
    //true? then insert right to left
    //false? then insert left to right

    let  i = 0
    while (currentLevel.length > 0) {
        let node = currentLevel.pop()
        ans[i].push(node.val)

        if (leftToRight) {
            node.right && nextLevel.push(node.right)
            node.left && nextLevel.push(node.left)
        } else {
            node.left && nextLevel.push(node.left)
            node.right && nextLevel.push(node.right)
        }

        if (currentLevel.length === 0) {
            currentLevel = nextLevel
            nextLevel = []
            leftToRight = !leftToRight

            ans.push([])
            i++
        }
    }
    return ans
}