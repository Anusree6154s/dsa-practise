/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // approach -brute force
    // find permutations of all elements
    //      using stack methods, loop every element and
    //      sort them in increasing order (using reverse or custom sort, sort() function does it lexicographically)
    //      return the next one aferteh one in question

    // approach optimal
    //      find the breakpoint (the first valley from back)
    //      swap it with the next higher number from back
    //      reverse all emenets after breakpoint
    //      edge case: if highest perm, return the lowest perm

    let breakpointIndex = -1
    let breakpoint
    for (let i = nums.length - 1; i > 0; i--) { //find breakpoint
        if (nums[i - 1] < nums[i]) {
            breakpointIndex = i - 1
            breakpoint = nums[i - 1]
            break
        }
    }

    if (breakpointIndex == -1) { //edge case
        nums.reverse()
        return
    }

    for (let i = nums.length - 1; i >= 0; i--) { //swap breakpoint wth next higher number
        if (nums[i] > breakpoint) {
            swap(i, breakpointIndex)
            break
        }
    }

    let start = breakpointIndex + 1;
    let end = nums.length - 1;
    while (start <= end) {
        swap(start++, end--);
    }


    function swap(a, b) {
        [nums[a], nums[b]] = [nums[b], nums[a]]
    }
};