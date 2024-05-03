## Topics<a id="top"></a>

1. [Strings](#Strings)
2. [Space Complexity](#space)
3. [Debugging](#debugging)

## 1. Strings <a id="Strings"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What are strings in javascript?</span>

- Array of characters
- Can contain alphanumeric characters, special characters
- Lot of similarity with arrays:
  - Concept of indexing
  - Common methods like -
    - slice()
    - indexOf()
    - includes()
    - split()
    - join()\*

#### <span style="color:#ff69b4;">Q2. What are Substring and Subsequence of a string in javascript?</span>

- Substring: **Continuous part of string**, take out characters from a string placed b/w two indices in a continuous order
- Subsequence: **Remove zero or more characters b/w two indices**, without changing the order of the remaining elements.
- Examples: “thequickbrownfox”
  - substring: “quick”
  - subsequence: “qck”

#### <span style="color:#ff69b4;">Q3. What are Prefix and Suffix of a string in javascript?</span>

- Prefix: **substring that occurs at the beginning** of the string
- Suffix: **substring that occurs at the end** of the string
- example: str= "Hello, World"
  - prefix: Hel
  - suffix: orld

#### <span style="color:#ff69b4;">Q4. What are Mutable and Immutable strings?</span>

- **Mutable**: **Strings that can be changed** after initialization. eg: character arrays in C and C++
- **Immutable**: S**trings that cannot be changed after initialization**. **Eg: Strings in JS**

#### <span style="color:#ff69b4;">Q4. What are some common string operations?</span>

1. Reversing a string: `reverse()`
2. Check if strings are identical: `if(str1===str2)`
3. Sorting : `sort()`
4. Concatenation: `concat()`
5. Count characters : `length()`
6. Removing characters: `split()` and `join()`, or `replace()`
7. Printing substrings/subsequences: `substring()`

### <u>Problems</u>

1. Capitalise first letter of every word
2. Palindrome

## 2. Two Pointer <a id="two"></a>

[Top](#top)

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is two-pointer technique?</span>

- Is **an optimization** to solve certain array traversal problems.
- Reduces the number of nested loops needed, **reducing Time Complexity to linear or linearithmeic**.
- The idea is to **position 2 pointers** which can **traverse at the same or different speed** and in the **same or opposite directions** to solve the problem.

### <u>Problems</u>

1. Palindrome
