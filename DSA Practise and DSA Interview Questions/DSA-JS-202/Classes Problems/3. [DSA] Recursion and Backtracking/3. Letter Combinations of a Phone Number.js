// Problem Description
// Given an input string containing digits between 2 and 9 (both included), find and print all the letter combinations that number could represent.

// The mapping can be seen here

// image - https://storage.googleapis.com/crio-content-container-assets/ME_ME_DSA_RECURSION_BACKTRACKING_MODULE_ME_DSA_RECURSION_BACKTRACKING_MODULE_LETTERCOMBINATIONSOFPHONENUMBER_image_0.jpg

// Note: The output needs to be lexicographically sorted. Some digits can represent 4 characters.

// Input format
// First line has a string S containing the digits.

// Output format
// Print all possible words (space separated) in lexicographical order.

// Constraints
// Length of string S <= 8

// Sample Input 1
// 23

// Sample Output 1
// ad ae af bd be bf cd ce cf

// Explanation 1
// First letter can be ‘a’, ’b’ or ’c’ as 2 is mapped to these three letters, and the second letter can be one of ‘d’, ‘e’ or ‘f’ as 3 is mapped to these three letters.

// Sample Input 2
// 234

// Sample Output 2
// adg adh adi aeg aeh aei afg afh afi bdg bdh bdi beg beh bei bfg bfh bfi cdg cdh cdi ceg ceh cei cfg cfh cfi

// Explanation 2
// 2 can be presented by ‘a’, ’b’ or ’c’

// 3 can be presented by ‘d’, ’e’ or ’f’

// 4 can be presented by ‘g’, ’h’ or ’i’

// So all combinations of these three numbers are given in the output, in the lexicographical order

function letterCombinationsOfPhoneNumber(digits) {
    if (digits.length === 0) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    // Define a recursive function to generate combinations
    function backtrack(index, combination) {
        // If the combination is complete, add it to the result
        if (index === digits.length) {
            result.push(combination);
            return;
        }


        const letters = map[digits[index]]; // Get the letters corresponding to the current digit
        for (const letter of letters) {
            backtrack(index + 1, combination + letter); // Iterate over the letters and recursively generate combinations
        }
    }

    // Start generating combinations with index 0 and an empty string
    backtrack(0, '');

    // Return the result
    return result;
}

let digits = '23'
let result = letterCombinationsOfPhoneNumber(digits)
console.log(result)