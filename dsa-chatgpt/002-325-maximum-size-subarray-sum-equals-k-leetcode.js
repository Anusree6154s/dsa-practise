// 325. maximum-size-subarray-sum-equals-k-leetcode (premium question)

const maxSubArraySumEqualsK = (nums, k) => {
  let map = new Map([[0, -1]]);

  let prefix = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    prefix = prefix + nums[i];
    const complement = prefix - k;

    if (prefix === k) {
      maxLen = i + 1; // subarray from 0 to i (will always be the longest sub arr, so we dont need to use Math.max)
    }

    if (map.has(complement)) {
      const start = map.get(complement);
      maxLen = Math.max(maxLen, i - start);
    }

    // only need to store the first occurance of the curr prefix
    if (!map.has(prefix)) {
      map.set(prefix, i);
    }
  }

  return maxLen;
};

let nums = [1, -1, 5, -2, 3],
  k = 3;
const sum = maxSubArraySumEqualsK(nums, k);
console.log("sum:", sum); //expected: 4
