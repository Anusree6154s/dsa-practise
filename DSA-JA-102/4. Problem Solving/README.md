## Topics

1. [Problems](#problems)
2. [Palindrome](#Palindrome)
3. [Permutation](#Permutation)
4. [Palindrome & Permutation Problems](#Problems2)

## 1. Problems <a id="problems"></a>

- Crio
  1. Print Matrix in Spiral Order
  2. Best time to Buy and Sell stock
  3. Find if the string permutation can form a palindrome

## 2. Palindrome <a id="Palindrome"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is a Palindrome?</span>

- A word, phrase, or sequence **that reads the same backwards as forwards**
- Examples: civic, radar, level, rotor, kayak, racecar, madam

#### <span style="color:#ff69b4;">Q2. How to check if a String is a valid Palindrome?</span>

- To find if a sentence is palindrome, **compare each character from left and right**. If they are equal, compare until left and right of string are equal or right becomes less than left. Remember to ignore white spaces and other characters in a string.
- tTo reduce time complexity by half, compare for Math.floor(i/2) letters of the string

## 3. Permutation <a id="Permutation"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is permutation of a string?</span>

- A Permutation of a string is another **string that contains same characters, only the order of characters can be different.**
- For example, ‘abcd’ and ‘dabc’ are Permutations of each other.
- For example, all Permutations of ‘abc’ would be - ‘abc’, ‘acb’, ‘bac’, ‘bca’, ‘cab’, ‘cba’

## 2. Palindrome & Permutation Problems <a id="Problems2"></a>

- Crio
  1. Find if the String Permutation can form a Palindrome
- chatgpt
  1. Permutations:
     - Given a collection of distinct integers, return all possible permutations.
     - Example:
       - Input: [1,2,3]
       - Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
  2. Next Permutation:
     - Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.Example:
       - Input: [1,2,3]
       - Output: [1,3,2]
  3. Palindrome Permutation:
     - Given a string, determine if a permutation of the string could form a palindrome.Example:
       - Input: "code"
       - Output: falseInput: "aab"
       - Output: true
  4. Longest Palindromic Substring:
     - Given a string s, find the longest palindromic substring in s.Example:
       - Input: "babad"
       - Output: "bab" (or "aba")
  5. Valid Palindrome:
     - Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.Example:
       - Input: "A man, a plan, a canal: Panama"
       - Output: true
  6. Minimum Number of Insertions to Make a String Palindrome:
     - Given a string s, find the minimum number of insertions needed to make s a palindrome.Example:
       - Input: "leetcode"
       - Output: 5 (Insert "t", "c", "o", "d", "e" to get "leetcodetcolee")
