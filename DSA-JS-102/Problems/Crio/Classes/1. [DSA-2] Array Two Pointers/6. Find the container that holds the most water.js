//HARD
//Container With Most Water

// Problem Description
// You are given an array of N non-negative integers where each represents the height of a line. N vertical lines are drawn at points marked 1 to n on the x axis as shown in the diagram. Find two lines, which together with the x axis forms a container, such that the container holds the most water. Assume the width of lines to be negligible.

// Note: You may not slant the container and n is at least 2.
//image: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg


// Sample Input 1
// 9
// 1 8 6 2 5 4 8 3 7

// Sample Output 1
// 49

// Explanation 1
// The lines of length 8 and 7 form a container that can hold 7*7=49 units of water. Here, the first 7 is the minimum of the two line heights and the second 7 is the number of units they are apart. This is the largest container that can be formed with the given input.

//tc=n, sc=1
function maxArea(height) {
    let max = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        let minHeight = Math.min(height[left], height[right])
        let area = minHeight * (right - left)
        max = Math.max(max, area)
        if (height[left] < height[right]) {

            left++
        } else {

            right--
        }
    }

    return max

}

let result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(result);