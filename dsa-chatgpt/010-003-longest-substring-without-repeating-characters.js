// 003. longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map()
    let left = 0
    let maxLen = 0

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= left) {
            left = map.get(s[i]) + 1
        }
        map.set(s[i], i)
        maxLen = Math.max(maxLen, i - left + 1)
    }

    return maxLen
        // make sure index for new left is always 
        // after curr left 
};
