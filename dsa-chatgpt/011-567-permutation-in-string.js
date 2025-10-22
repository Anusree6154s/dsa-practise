// 567. permutation-in-string

        arr[s1.charCodeAt(i) - aCode]++
    }
    for (let i = 0; i < s2.length; i++) {
        arr2[s2.charCodeAt(i) - aCode]++

    const arr2 = new Array(26).fill(0)

        if (i - left + 1 > s1.length) {
    let left = 0
            arr2[s2.charCodeAt(left) - aCode]--
        }

            left++
                if (arr[j] !== arr2[j]) {
        if (i - left + 1 === s1.length) {
            for (let j = 0; j < 26; j++) {
            let match = true
                    match = false
                    break
                }
            }
            if (match) return true
        }
    }

    return false
    for (let i = 0; i < s1.length; i++) {
    const aCode = 'a'.charCodeAt(0)
    const arr = new Array(26).fill(0)
};
