// 424. longest-repeating-character-replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const countArr = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        maxCount = Math.max(maxCount, countArr[currLetterIndex])
    let maxCount = 0
    let left = 0
    // the length of window to be found must be equal to 
    // k+maxCount (most occuring letter count + replaceable 
count)
        }
    }
            left++
        countArr[currLetterIndex]++

        maxLen = Math.max(maxLen, i - left + 1)

    return maxLen
    let maxLen = 0
    const aCode = 'A'.charCodeAt(0)
        const currLetterIndex = s[i].charCodeAt(0) - aCode
            countArr[s[left].charCodeAt(0) - aCode]--
        if (i - left + 1 > (k + maxCount)) {

};
