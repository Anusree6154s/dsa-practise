// 383. ransom-note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let map = new Map()
    for (let letter of magazine) {
        map.set(letter, (map.get(letter) || 0) + 1)
    }

    for (let letter of ransomNote) {
        map.set(letter, map.get(letter) - 1)
        if (!map.has(letter) || map.get(letter) === 0) {
            return false
        }
    }

    return true
};
