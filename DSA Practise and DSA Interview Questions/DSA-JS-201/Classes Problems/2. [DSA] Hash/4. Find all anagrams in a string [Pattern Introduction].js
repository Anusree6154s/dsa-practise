// Problem Description
// You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.


// Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.


// Note that indexing starts at 0.

// Input format
// There is one line of input, containing two space-separated strings S and P.

// Output format
// First-line should contain the number of such starting indices.

// Next line should contain the indices in increasing order separated by a space.

// Sample Input 1
// aaba ab

// Sample Output 1
// 2

// 1 2

// Explanation 1
// The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input string “aaba”.

// Sample Input 2
// bacdgabcda abcd

// Sample Output 2
// 3

// 0 5 6

// Explanation 2
// The anagrams of "abcd" can be seen as “bacd” at index 0, “abcd” at index 5 and “bcda” at index 6.

// Constraints
// 1 <= length(S), length(P) <= 10^6

//tc=O(s), sc=O(s)-> in case when every lettr in s is an anagram
function findAllAnagramsInAString(s, p) {
    //using 2 hasmaps and comparing h=them

    let sMap = new Map()
    let pMap = new Map()

    let ans = []

    //filling pMap
    for (let item of p) {
        if (pMap.has(item)) {
            let count = pMap.get(item)
            pMap.set(item, ++count)
        } else {
            pMap.set(item, 1)
        }
    }

    //window problem
    //a for loop for getting the window and while loop for maintaining
    let left = 0
    for (let right = 0; right < s.length; right++) {
        //add new letter
        if (sMap.has(s[right])) {
            let count = sMap.get(s[right])
            sMap.set(s[right], ++count)
        } else {
            sMap.set(s[right], 1)
        }
        
        while (sMap.size===pMap.size) {
            //update answer 
            if (isEqual(sMap, pMap)) ans.push(left)

            //remove prev left letter
            let count = sMap.get(s[left])
            if (count == 1) {
                sMap.delete(s[left])
            } else {
                sMap.set(s[left], --count)
            }
           
            //update left
            left++

        }
    }

    //isEqual helper function
    //tc=O(1) -> for 26 letters
    function isEqual(map1, map2) {
        //if maplength are diff, return false (but while loop is already based on it we can skip it)
        // if any one elemnt of map differs in key or value, return false

        for (let [key, value] of map1) {
            if (!map2.has(key) || map2.get(key) !== value) return false
        }
        
        return true
    }

    return ans
}




//ANOTHER APPROACH
// //tc=O(s)-> length odf string s, sc= O(1) -> 26 letters
// function findAllAnagramsInAString(s, p) {
//     //will using char codes

//     //will make two arrays of length 26 filled with 0
//     // follows the principal:
//     // anyLetter.charCodeat(0)-a.charCodeAt(0) = a number between 0 to 25 
//     //-> ∴ pointing to their position in the array

//     // we will have a fixed array and a variable window aray
//     // both having position values incremented to 1 if the letter matches
//     // if array1 == array2, then window matches the anagram

//     let sArray = new Array(26).fill(0)
//     let pArray = new Array(26).fill(0)

//     let aCharCode = 'a'.charCodeAt(0)

//     //fill pArray
//     for (let i = 0; i < p.length; i++) {
//         let position = p.charCodeAt(i) - aCharCode
//         pArray[position] = ++pArray[position]
//     }

//     //window problem
//     //a for loop for getting the window and while loop for maintaining
//     let left =0
//     for(let right=0; right<s.length; right++){

//         while(isEqual(sArray, pArray)){

//         }
//     }


//     //isEqual helper function
//     //tc=O(1) -> for 26 letters
//     function isEqual(arr1, arr2){
//         for(let i=0; i<arr1.length; i++){
//             if(arr1[i]!==arr2[i]) return false
//         }
//         return true
//     }

// }
let [s, p] = ['bacdgabcda', 'abcd']
let result = findAllAnagramsInAString(s, p);

console.log(result.length);

console.log(...result);