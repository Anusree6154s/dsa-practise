## Question

#### Problem Description

Given a paragraph of words, capitalize the first character of each word and return the paragraph.

**Sample Input 1**
the quick Brown fox jumps over The lazy dog.

**Sample Output 1**
The Quick Brown Fox Jumps Over The Lazy Dog.

**Explanation**
Each word has it’s first character capitalized

**Constraints**

Length of paragraph < 100.

The paragraph contains spaces, lowercase and uppercase characters.

## Answer

- for loop, if space exists before a word, then push that word after making it uppercase
  -tc=n, sc=n

_**gpt suggestion**: avoid creating an extra array and directly build the string, which improves performance slightly (for very large strings)_
