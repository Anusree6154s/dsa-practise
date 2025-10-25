// 084. largest-rectangle-in-histogram

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0
    let stack = [] // indices array to calculate widths

    for (let i = 0; i <= heights.length; i++) {
        const h = i === heights.length ? 0 : heights[i]
        while (stack.length && heights[stack[stack.length - 1]] 
> h) {
            let height = heights[stack.pop()]
            let width = stack.length ? i - stack[stack.length - 
1] - 1 : i
            maxArea = Math.max(maxArea, width * height)
        }
        stack.push(i)
    }

    return maxArea
};
