## Topics

1. [Prefix Sum](#prefix)
2. [Suffix Sum](#suffix)
3. [Prefix and Suffix Problems](#both)
4. [Subarray, Subsequence, Subset, Substring](#sub)

## 1. Prefix Sum <a id="prefix"></a>

### <u>Template</u>

```javascript
function prefixSum(nums) {
  const prefix = []; // Initialize an empty array for prefix sum

  let sum = 0;
  for (const num of nums) {
    sum += num;
    prefix.push(sum);
  }

  return prefix;
}
```

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is Prefix Sum Array?</span>

- Given an array arr[] of size n, its prefix sum array **is another array** prefixSum[] **of the same size, such that the value of prefixSum[i] is arr[0] + arr[1] + arr[2] … arr[i].**
- Example:
  - Input : arr[] = {10, 20, 10, 5, 15}
  - Output : prefixSum[] = {10, 30, 40, 45, 60}

### <u>Problems</u>

Common Problems:

1. Range Sum Queries:
   - Given an array of numbers, preprocess it to efficiently answer queries that ask for the sum of elements within a specified range.
2. Subarray Sum Equals K:
   - Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals to k.
3. Maximum Subarray Sum:
   - Given an array of integers, find the contiguous subarray with the largest sum.
4. Minimum Subarray Length with Sum at Least K:
   - Given an array of integers and an integer k, find the length of the smallest contiguous subarray with a sum at least k.
5. Count of Subarrays with Given Product:
   - Given an array of positive integers and an integer target, count the number of contiguous subarrays whose product is equal to target.

## 2. Suffix Sum <a id="suffix"></a>

### <u>Template</u>

```javascript
function suffixSum(nums) {
  const suffix = []; // Initialize an empty array for suffix sum

  let sum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    sum += nums[i];
    suffix.unshift(sum);
  }

  return suffix;
}
```

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is Suffix Sum Array?</span>

- Similar to Prefix Sum but from the right.
- Input : arr[] = {10, 20, 10, 5, 15}
- Output : suffixSum[] = {60, 50, 30, 20, 15}

### <u>Problems</u>

Common Problems:

1. Range Sum Queries:
   - Given an array of numbers and multiple queries asking for the sum of elements within a specified range, precompute the suffix sum array and use it to efficiently answer the queries.
2. Maximum Subarray Sum:
   - Given an array of integers, find the contiguous subarray with the largest sum.
   - This problem can be solved by computing the suffix sum array and then finding the maximum subarray sum among all suffixes.
3. Minimum Subarray Length with Sum at Least K:
   - Given an array of integers and an integer k, find the length of the smallest contiguous subarray with a sum at least k.
   - This problem can also be solved using the suffix sum array along with binary search.
4. Count of Subarrays with Given Sum:
   - Given an array of integers and an integer target, count the number of contiguous subarrays whose sum is equal to the target.
   - This problem can be efficiently solved using the suffix sum array along with a hashmap to store the prefix sums.
5. Minimum Window Subarray Sum:
   - Given an array of positive integers and a target sum, find the minimum length of a contiguous subarray whose sum is greater than or equal to the target sum.
   - This problem can be solved using the sliding window technique along with the suffix sum array.

## 1. Prefix and Suffix Problems <a id="both"></a>

1. Find Equal Partistion Index
2. Maximum Subarray Sum Circular:
   - Given a circular array of integers, find the maximum possible sum of a non-empty subarray.
   - This problem can be solved by applying both prefix sum and suffix sum techniques.
   - You can compute the maximum subarray sum within the original array using the Kadane's algorithm and handle the circular aspect by computing the maximum subarray sum for the inverted array (where signs are flipped) and subtracting the sum of the inverted array from the total sum of the original array.
3. Split Array Largest Sum:
   - Given an array of positive integers and an integer m, partition the array into m non-empty contiguous subarrays and minimize the largest sum among these m subarrays.
   - This problem can be solved using dynamic programming with prefix sum and suffix sum arrays.
   - You can iterate through the possible partition positions and use the prefix sum and suffix sum arrays to efficiently compute the sum of each subarray.
4. Valid Mountain Array:
   - Given an array of integers, determine if the array can be rearranged into a mountain array. A mountain array is defined as an array that first increases to a peak element and then decreases.
   - This problem can be solved using both prefix sum and suffix sum techniques.
   - You can find the peak element using prefix sum and suffix sum arrays and check if it satisfies the mountain array conditions.
5. Minimum Moves to Equal Array Elements II:
   - Given an integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing or decrementing any element by 1.
   - This problem can be solved using the median value of the array and prefix sum and suffix sum techniques to compute the total number of moves required.

## 4. Subarray, Subsequence, Subset, Substring <a id="sub"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is Subarray, Subsequence, Subset and Substring?</span>

1. Subarray (array)
   - A subarray is a **contiguous part of array**. **An array** that is **inside another array**.
   - Example array [1, 2, 3, 4].
   - There are 10 non-empty sub-arrays: (1), (2), (3), (4), (1,2), (2,3), (3,4), (1,2,3), (2,3,4) and (1,2,3,4)
2. Subsequence (array or string)
   - A subsequence is a **non contiguous sequence** that can be derived from another sequence by zero or more elements, **without changing the order of the remaining elements**.
   - (1), (2), (3), (4), (1,2), (1,3),(1,4), (2,3), (2,4), (3,4), (1,2,3), (1,2,4), (1,3,4), (2,3,4), (1,2,3,4)
3. Subset (array)
   - **Any combination of elements in an array**. Can **even be an empty subset**. In addition to the empty subset, it will be same as subsequence but **order of elements within the subset doesn’t matter**.
   - (), (1), (2), (3), (4), (1,2), (1,3),(1,4), (2,3), (2,4), (3,4), (1,2,3), (1,2,4), (1,3,4), (2,3,4), (1,2,3,4)
4. Substring (string)
   - A substring is a **contiguous sequence** of characters **within a string**

## 4. Kadane's Algorithm <a id="kadane"></a>

### <u>Template</u>

There are 2 ways of writing this code:

1. By manually resetting maxEndingHere when it becomes less than 0

   ```javascript
   function maxSubarraySum(nums) {
     let maxSoFar = -Infinity;
     let maxEndingHere = 0;

     for (let i = 1; i < nums.length; i++) {
       maxEndingHere = maxEndingHere + nums[i];
       maxSoFar = Math.max(maxSoFar, maxEndingHere);

       // Reset maxEndingHere to 0 if it becomes negative
       if (maxEndingHere < 0) {
         maxEndingHere = 0;
       }
     }

     return maxSoFar;
   }
   ```

2. maxEndingHere automatically gets restted as the current element of array in Math.max()
   ```javascript
   function maxSubarraySum(nums) {
     let maxSoFar = -Infinity; // Initialize maxSum to negative infinity
     let maxEndingHere = 0; // Initialize currentSum to 0

     for (let i = 1; i < nums.length; i++) {
       maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
       maxSoFar = Math.max(maxSoFar, maxEndingHere);
     }

     return maxSum;
   }
   ```

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is Kadane's Algorithm?</span>
  - The simple **idea** of Kadane's Algorithm **is to look for all positive contiguous segments of array** (maxEndingHere is used for this) **[i.e, if it is negative, take current array element value and dump the sum got till now]**
  - Keep track of maximum sum contiguous segment among all positive segments (maxSoFar used for this)
  - **Each time we get a positive sum, compare it with maxSoFar and update it if maxEnding Here is greater than existing maxSoFar.**

### <u>Problems</u>
  - Crio
    1. Find the largest sum contiguous subarray
  - Chatgpt
    1. Maximum Subarray Sum: 
        - Given an array of integers, find the contiguous subarray with the largest sum.
    2. Maximum Product Subarray: 
        - Given an array of integers, find the contiguous subarray with the largest product.
    3. Longest Continuous Increasing Subsequence:
        -  Given an array of integers, find the length of the longest continuous increasing subsequence.
    4. Longest Continuous Decreasing Subsequence: 
        - Given an array of integers, find the length of the longest continuous decreasing subsequence.
    5. Maximum Sum Circular Subarray: 
        - Given a circular array of integers, find the maximum possible sum of a non-empty subarray.
    6. Minimum Window Subarray Sum: 
        - Given an array of positive integers and a target sum, find the minimum length of a contiguous subarray whose sum is greater than or equal to the target sum.
    7. Count of Subarrays with Given Sum: 
        - Given an array of integers and an integer target, count the number of contiguous subarrays whose sum is equal to the target.
    8. Maximum Sum of Two Non-Overlapping Subarrays: 
        - Given an array of integers and two non-negative integers k1 and k2, find the maximum sum of any two non-overlapping subarrays of lengths k1 and k2.

