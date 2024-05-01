## Topics

1. [Sliding Window Pattern](#sliding)

## 1. Sliding Window Pattern <a id="sliding"></a>

### <u>Template</u>
1. Fixed Size Window Template 
      ```javascript
      fixedSize() {
         let left = 0, right = 0; // Initialization
         while (right < n) { // Stopping condition
            // Add right element into the window
            
            if (right - left + 1 === k) { // If window size is reached
                  if (condition satisfied) { // Check if condition is satisfied
                     // Update the answer
                  }
                  // Remove left element from the window
               
                  left++; // Reduce the window size
            }
            right++; // Increase the window size
         }
      }
      ```

2. Variable Size Window Template 
   - To find largest window
      ```javascript
         left = 0, right = 0; //Initialization
         while(right < n){
            //add right element into the window
            while(condition never going to be satisfied by increasing the window size){
               //remove left element from the window
               left++; //Reduce the window size
            }
            //update the answer
            right++; //Increase the window size
         }
      ```
   - To find smallest window
      ```javascript
         left = 0, right = 0; //Initialization
         while(right < n){
            //add right element into the window
            while(condition is satisfied){
               //update the answer
               //remove left element from the window
               left++; //Reduce the window size
            }
            right++; //Increase the window size
         }
      ```

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is Sliding Window Pattern?</span>

- A Sliding Window is used to solve problems **where we need to operate on a contiguous subarray** (or sublist) of a larger array (or linked list).
- It is applicable in cases where we need **to**
  - **Find longest or shortest subarray/substring meeting a particular criteria** (E.g. Smallest substring with X unique characters or Longest stretch of days when stock price did not decrease). These are variable size windows.
  - **Find a window of fixed size** with contents meeting some criteria (E.g. Subarray of size N with largest sum)
- It **involves 2 pointers**. One indicating the **beginning of the window and** the second indicating the **end**.
- The idea is **to create a window containing a subarray and slide the window along as we traverse through the array to find the answer**.
- The window size can change by adding new elements in the end or removing elements from the beginning as we traverse.

### <u>Problems</u>

- Crio
  1. Longest substring without repeating characters (variable size window)
  2. Maximum sum subarray of fixed size K (fixed size window)
  3. Given a string and a pattern, find the smallest substring which has all the characters of the pattern
  4. Smallest (or largest) subarray that adds up to a given sum (or zero)
  5. Given a string and a pattern, find out if the string contains any permutation of the pattern 
      - (slide the window along looking for the permutations of the pattern in the window)
  6. Given a string and a set of words of the same length, find all substrings that are a concatenation of all the words exactly once 
      - (similar to permutation above, but with words instead of letters)
