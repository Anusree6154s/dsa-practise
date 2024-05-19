// Problem Description
// Write a program that takes a lowercase string str as input and checks if it contains all 26 alphabets at least once.

// Given a string str, return true if str contains all 26 alphabets, or false otherwise.

// Input format
// The first line contains a lowercase string str.

// Output format
// Return a boolean value true or false.

// Sample Input 1
// thequickbrownfoxjumpsoverthelazydog

// Sample Output 1
// true

// Explanation
// str contains at least one of every letter of the English alphabet.

//tc=n , sc=1
function allAlphabetsOrNot(str) {
  //set converts str to srray like structure
  const set = new Set("abcdefghijklmnopqrstuvwxyz");

  //   let string = str.split("");

  for (let element of set) { //tc =n
    if (!str.includes(element)) { //tc=26
      return false;
    }
  }

  return true;
}

let str = "thequickbrownfoxjumpsoverthelazydog";
let res = allAlphabetsOrNot(str);
console.log(res ? "true" : "false");
