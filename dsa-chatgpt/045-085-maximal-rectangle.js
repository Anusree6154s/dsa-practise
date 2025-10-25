// 085. maximal-rectangle

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    // same as largest rectangle in histogram question
    // just that each row acts as a seperate historgram
    // ans as we move down the matrix rows height increases
    // small diff: if a blcok has value 0, then we reset its 
    // height to 0 and start from there again

    let maxArea = 0
    const heights = new Array(matrix[0].length).fill(0)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            heights[j] =matrix[i][j] === '0' ? 0 : heights[j] + 1
        }

        let stack = []
        for (let idx = 0; idx <= matrix[0].length; idx++) {
            const h = idx === matrix[0].length ? 0 : heights[idx]
            while (stack.length && h < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()]
                const width = stack.length ? idx - stack[stack.length - 1] - 1 : idx
                maxArea = Math.max(maxArea, height * width)
            }
            stack.push(idx)
        }
    }

    return maxArea
};
