// Problem Description
// Given a string, write a program to check if it consists of equal number of vowels and consonants.

// Input format
// First line contains an string str consisting of lowercase english alphabets.

// Output format
// Return true if the string contains equal number of vowels and consonants else return false.

// Sample Input 1
// ab

// Sample Output 1
// true

// Explanation
// string "ab" contains one vowel (a) and one consonant (b).

// Constraints
// 1 <= str.length <= 10^5

//tc=n , sc=1
//n=str.length
function equalVowelsAndConsonants(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    //.match() is for checking is a value matches with regex only, in js
    //tc = length of regex
    if (str[i].match(/[aeiouAEIOU]/g)) {
      count++;
    } else {
      count--;
    }
  }

  return count === 0;
}

let str = "ab";
let res = equalVowelsAndConsonants(str);
if (res) {
  console.log("true");
} else {
  console.log("false");
}
