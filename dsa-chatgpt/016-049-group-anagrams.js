// 049. group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('')
        if (map.has(sortedStr)) {
            const arr = map.get(sortedStr)
            arr.push(str)
        } else {
            map.set(sortedStr, [str])
        }
    }

    return Array.from(map.values())
};
