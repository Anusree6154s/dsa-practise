// 242. valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const arr = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - aCode]++;
        arr[t.charCodeAt(i) - aCode]--;
    }


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) return false
    }

    return true
    const aCode = 'a'.charCodeAt(0)
    if (s.length !== t.length) return false;

};
