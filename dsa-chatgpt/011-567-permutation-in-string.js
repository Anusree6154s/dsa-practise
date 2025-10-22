// 567. permutation-in-string

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // permutation as in same letters and same count, together
  // letter similarity and count is checked on array
  // that they are always together is checked by keeping
  // fixed window length

  if (s1.length > s2.length) return false;

  const arr = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  for (let i = 0; i < s1.length; i++) {
    arr[s1.charCodeAt(i) - aCode]++;
  }

  const arr2 = new Array(26).fill(0);
  let left = 0;
  for (let i = 0; i < s2.length; i++) {
    arr2[s2.charCodeAt(i) - aCode]++;

    if (i - left + 1 > s1.length) {
      arr2[s2.charCodeAt(left) - aCode]--;
      left++;
    }

    if (i - left + 1 === s1.length) {
      let match = true;
      for (let j = 0; j < 26; j++) {
        if (arr[j] !== arr2[j]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
  }

  return false;
};
