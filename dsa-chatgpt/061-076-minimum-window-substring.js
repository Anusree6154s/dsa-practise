// 076. minimum-window-substring

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return ""

    const need = new Map()
    for (let ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1)
    }

    let have = 0
    const needCount = need.size
    const window = new Map()

    let left = 0
    let minLen = Infinity
    let minStart = 0

    for (let right = 0; right < s.length; right++) {
        window.set(s[right], (window.get(s[right]) || 0) + 1)

        // need the char and the count matches
        if (need.has(s[right]) && need.get(s[right]) === window.get(s[right])) {
            have++
        }

        while (have === needCount) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1
                minStart = left
            }

            window.set(s[left], window.get(s[left]) - 1)

            if (need.has(s[left]) && window.get(s[left]) < need.get(s[left])) {
                have--
            }
            left++
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen)
};
