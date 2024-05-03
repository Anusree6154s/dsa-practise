## Topics

1. [Two Pointer](#two-pointer)
2. [Problems List](#problems)

## 1. Two Pointer <a id="two-pointer"></a>

#### Template:

```javascript
function twoPointer(nums, target) {
  // Sort the array if needed
  nums.sort((a, b) => a - b);

  // Initialize two pointers
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = nums[left] + nums[right];

    if (mid === target) {
      return mid;
    } else if (mid < target) {
      left++;
    } else {
      right--;
    }
  }

  return -1;
}
```

#### <span style="color:#ff69b4;">Q1. What is two-pointer technique?</span>

- Is **an optimization** to solve certain array traversal problems.
- Reduces the number of nested loops needed, **reducing Time Complexity to linear or linearithmeic**.
- The idea is to **position 2 pointers** which can **traverse at the same or different speed** and in the **same or opposite directions** to solve the problem.

## 2. Problems <a id="problems"></a>

- Crio
  1. Two Sum
     - to get 2 elements that sum to the target value
     - For sorted array
     - For unsorted array
  2. Three Sum
     - to get 3 elements that sum to the target value
     - For sorted and unsorted array
  3. Merge two sorted arrays
  4. Find/Remove Duplicates
  5. Move all 0s in an integer array to one end maintaining order of other elements
  6. Confirm if a given string is a palindrome
  7. Trapping rain water
  8. Container with most water
- Chatgpt : same as Crio
