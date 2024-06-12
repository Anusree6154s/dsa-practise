// Problem Description
// Write a program that takes a list of words arr[] as input and returns the most occurring word in arr[].
// It is guaranteed that if there are multiple words with the same frequency, the program should return the lexicographically minimum string among them.

// Input format
// The first line contains an integer N, the number of words in the array.

// The next N lines contain the words in the array.

// Output format
// Return the most occurring word in the array.

// Sample Input 1
// 4
// hello
// world
// crio
// crio

// Sample Output 1
// crio

// Explanation
// In this case, "crio" is the most frequent word, occurring 2 time.

//tc=n, , sc=m
// n=length of arr
//m=no of unique letters
function maxRepeatingWord(N, arr) {
  let map = new Map();
  for (let i = 0; i < N; i++) {
    if (map.has(arr[i])) {
      let count = map.get(arr[i]);
      map.set(arr[i], ++count);
    } else {
      map.set(arr[i], 1);
    }
  }

  let mapKeyArray = Array.from(map.keys());
  let freq = 0;
  for (let i = 0; i < map.size; i++) {
    let newFreq = map.get(mapKeyArray[i]);
    freq = Math.max(freq, newFreq);
  }

  let ans = [];
  for (let i = 0; i < map.size; i++) {
    if (freq === map.get(mapKeyArray[i])) {
      ans.push(mapKeyArray[i]);
    }
  }

  ans.sort();

  return ans[0];
}

let N = 6;
let arr = ["hello", "world", "crio", "crio", "apple", "apple"];

let res = maxRepeatingWord(N, arr);
console.log(res);
